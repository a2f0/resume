# Resume

## Quick Start

```sh
nvm use
npm install
pre-commit install
npm run server
npm run ci
```

## Testing

Test Locally

```sh
# start the dev server
npx next dev -p 4001
npm run test -- --spec test/specs/svg.e2e.ts
```

Deploy to Vercel without having to commit or push (the randomized URL for viewing build will be in the output of this command). Note: this will create the directory `.vercel` at the root of the project, which is in .gitignore.  So, if this is a clean clone, this will prompt for a setup.  Following the setup prompts configure the local repo.

```sh
# preview deployment
npx vercel
npx vercel --prod
```

Spell check against a [aspell definition in dotfiles](https://github.com/a2f0/dotfiles/blob/main/files/aspell.en.pws)

```sh
aspell --master=en_US --lang=en_US -c resume.json
```

## Infrastructure

### Setuo

1. Install [tfenv](https://github.com/tfutils/tfenv).
2. Install [blackbox](https://github.com/StackExchange/blackbox).
3. Run `blackbox_decrypt_all_files`.
4. Add `google-credentials.json` file to the `terraform` directory.

Initialize the backend

```sh
cd terraform
terraform init -backend-config=./terraform.backend

```

Apply the infrastructure

```sh
terraform apply --var-file=main.tfvars
```

Upgrading Terraform
```sh
tfenv list-remote
echo "1.3.10" > terraform/.terraform-version
terraform init -backend-config=./terraform.backend
terraform plan -var-file=main.tfvars
```
