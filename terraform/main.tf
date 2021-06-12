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
      source  = "chronark/vercel"
      version = "0.10.0"
    }
    gsuite = {
      source  = "DeviaVir/gsuite"
      version = "~> 0.1"
    }
  }
}
