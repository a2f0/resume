provider "vercel" {
  api_token = var.vercel_token
}

resource "vercel_project" "resume" {
  name      = "resume"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "${var.github_owner}/${var.github_repository}"
  }
}

resource "vercel_project_domain" "resume" {
  project_id = vercel_project.resume.id
  domain     = var.domain
}

resource "vercel_project_domain" "resume_staging" {
  project_id = vercel_project.resume.id
  domain     = var.domain_staging
}
