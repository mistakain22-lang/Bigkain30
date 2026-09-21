# Bigkain30

Node app workflow targets Azure App Service.

## Actions permissions
Workflows declare least-privilege `permissions`.
Repo setting should be: Actions → General → Workflow permissions → Read.

## Deploy
1. Create GitHub environments `Development` and `Production`.
2. Set Actions variables `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID`, `AZURE_WEBAPP_NAME`.
3. Create Entra federated credentials for both environment subjects.
4. Assign the custom role in `.github/azure/app-service-github-deployer.json` to that app on the Web App scope.
5. Run **Azure Web App (Node)** → Development + OIDC.

Fallback: uncheck OIDC and set environment secret `AZURE_WEBAPP_PUBLISH_PROFILE`.

See `docs/ACCESS.md`.
