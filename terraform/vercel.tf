provider "vercel" {
  token = var.vercel_token
}

resource "vercel_project" "resume" {
  name = "resume"
  git_repository {
    type = "github"
    repo = "${var.github_owner}/${var.github_repository}"
  }
}
