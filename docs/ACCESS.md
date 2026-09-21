# Access model

## GitHub
- Default Actions token: contents read.
- Deploy job: contents none, id-token write (OIDC).
- CODEOWNERS: @floreskain4-web on .github; both owners on general files.
- ChatGPT/Grok write requires GitHub App install on floreskain4-web with Contents: Read and write.

## Azure
- OIDC federated subjects:
  - repo:floreskain4-web/Bigkain30:environment:Development
  - repo:floreskain4-web/Bigkain30:environment:Production
- Assign role `App Service GitHub Deployer` (see .github/azure/app-service-github-deployer.json) or Website Contributor on the Web App resource only.
- Data plane (Key Vault secrets, blobs) is not granted to the GitHub identity. Give those DataActions to the App Service managed identity if the app needs them at runtime.

## Variables and secrets
Variables: AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_SUBSCRIPTION_ID, AZURE_WEBAPP_NAME
Environment secret (fallback): AZURE_WEBAPP_PUBLISH_PROFILE
