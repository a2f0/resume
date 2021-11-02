terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    vercel = {
      source  = "chronark/vercel"
      version = "0.10.0"
    }
    gsuite = {
      source  = "DeviaVir/gsuite"
      version = "~> 0.1"
    }
  }
  required_version = ">= 1.0.10"
}
