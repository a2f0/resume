terraform {
  backend "s3" {}
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    vercel = {
      source = "chronark/vercel"
      version = "0.10.0"
    }
  }
}

provider "github" {
  token = var.github_token
  owner = var.github_owner
}

provider "aws" {
  region = var.aws_region
}

resource "github_actions_secret" "vercel_org_id" {
  repository       =  var.github_repository
  secret_name      = "VERCEL_ORG_ID"
  plaintext_value  = var.vercel_org_id
}

resource "github_actions_secret" "vercel_project_id" {
  repository       =  var.github_repository
  secret_name      = "VERCEL_PROJECT_ID"
  plaintext_value  = vercel_project.resume.id
}

resource "github_actions_secret" "vercel_token" {
  repository       =  var.github_repository
  secret_name      = "VERCEL_TOKEN"
  plaintext_value  = var.vercel_token
}

data "aws_route53_zone" "resume" {
  name = var.domain
}

resource "aws_route53_record" "resume" {
  allow_overwrite = true
  name            = var.domain
  ttl             = 600
  type            = "NS"
  zone_id         = data.aws_route53_zone.resume.zone_id

  records = [
    vercel_domain.resume.intended_nameservers[0],
    vercel_domain.resume.intended_nameservers[1],
  ]
}
