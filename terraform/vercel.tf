provider "vercel" {
  token = var.vercel_token
}

resource "vercel_project" "resume" {
  name = "resume"
  node_version = "14.x"
  framework = "nextjs"
  git_repository {
    type = "github"
    repo = "${var.github_owner}/${var.github_repository}"
  }
}

resource "vercel_domain" "resume" {
  name = var.domain
}

resource "vercel_alias" "resume" {
  project_id = vercel_project.resume.id
  domain     = vercel_domain.resume.name
}

output "intended_nameservers" {
  value = vercel_domain.resume.intended_nameservers
}

output "nameservers" {
  value = vercel_domain.resume.nameservers
}
