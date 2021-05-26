resource "github_actions_secret" "slack_webhook_url" {
  repository       =  var.github_repository
  secret_name      = "SLACK_WEBHOOK_URL"
  plaintext_value  = var.slack_webhook_url
}
