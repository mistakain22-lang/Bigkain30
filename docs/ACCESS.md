# Access model (finalized: IBM first)

## Deploy target
Primary: IBM Cloud Code Engine application `bigkain-ibm-backend`.
Workflow: `.github/workflows/ibm-code-engine.yml`
Fallback: Azure App Service via `.github/workflows/azure-webapps-node.yml` (OIDC or publish profile).

## GitHub
- Default Actions token: contents read.
- IBM job: contents read only (uses IBM IAM API key secret, not git write).
- CODEOWNERS: @floreskain4-web on .github.
- ChatGPT/Grok write still needs GitHub App install on floreskain4-web with Contents: Read and write.

## IBM Cloud
Secret (repo or environment):
- IBM_IAM_API_KEY — IAM API key of a service ID limited to the Code Engine project.

Variables:
- IBM_RESOURCE_GROUP (default Default)
- IBM_REGION (default us-south)
- IBM_CE_PROJECT (default bigkain)
- IBM_CE_APP (default bigkain-ibm-backend)
- IBM_CE_BUILD_SOURCE (default .)

Create the API key in IBM Cloud IAM. Scope it to the Code Engine project, not account Administrator.
IBM does not use GitHub OIDC the same way Azure does; the API key is the current official Actions path.

## Azure (fallback only)
OIDC subjects:
- repo:OWNER/REPO:environment:Development
- repo:OWNER/REPO:environment:Production
Role: Website Contributor or `.github/azure/app-service-github-deployer.json` on the Web App only.
Data plane (Key Vault, blobs) stays on the App Service managed identity, not the GitHub identity.
