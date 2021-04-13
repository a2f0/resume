terraform {
  backend "s3" {}
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "github" {
  token = var.github_token
  owner = var.github_owner
}

resource "github_actions_secret" "vercel_org_id" {
  repository       =  var.github_repository
  secret_name      = "VERCEL_ORG_ID"
  plaintext_value  = var.vercel_org_id
}

resource "github_actions_secret" "vercel_project_id" {
  repository       =  var.github_repository
  secret_name      = "VERCEL_PROJECT_ID"
  plaintext_value  = var.vercel_project_id
}

resource "github_actions_secret" "vercel_token" {
  repository       =  var.github_repository
  secret_name      = "VERCEL_TOKEN"
  plaintext_value  = var.vercel_token
}