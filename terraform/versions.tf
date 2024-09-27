terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    gsuite = {
      source  = "DeviaVir/gsuite"
      version = "~> 0.1"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
    github = {
      source  = "integrations/github"
      version = "~> 6.3"
    }
  }
  required_version = ">= 1.9.6"
}
