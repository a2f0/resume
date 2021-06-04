provider "aws" {
  region = var.aws_region
}

data "aws_route53_zone" "resume" {
  name = var.domain
}

resource "aws_route53_record" "resume-ns" {
  allow_overwrite = true
  name            = var.domain
  ttl             = 60
  type            = "NS"
  zone_id         = data.aws_route53_zone.resume.zone_id

  records = [
    "ns-468.awsdns-58.com",
    "ns-844.awsdns-41.net",
    "ns-1621.awsdns-10.co.uk",
    "ns-1372.awsdns-43.org"
  ]
}

resource "aws_route53_record" "resume-a" {
  allow_overwrite = true
  name            = var.domain
  ttl             = 60
  type            = "A"
  zone_id         = data.aws_route53_zone.resume.zone_id

  records = [
    "76.76.21.21"
  ]
}
