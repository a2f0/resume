terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    gsuite = {
      source  = "DeviaVir/gsuite"
      version = "~> 0.1"
    }
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.1"
    }
  }
  required_version = ">= 1.9.6"
}
