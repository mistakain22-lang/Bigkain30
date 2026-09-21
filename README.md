# Bigkain30

Primary runtime: **IBM Cloud Code Engine** app `bigkain-ibm-backend`.
Azure App Service remains an optional fallback.

## IBM deploy
1. Create Code Engine project and app `bigkain-ibm-backend`.
2. Create an IAM API key for a service ID that can update that project only.
3. Repo secret `IBM_IAM_API_KEY`.
4. Variables (optional overrides): `IBM_RESOURCE_GROUP`, `IBM_REGION`, `IBM_CE_PROJECT`, `IBM_CE_APP`, `IBM_CE_BUILD_SOURCE`.
5. Environments `Development` / `Production`.
6. Actions → **IBM Code Engine (bigkain-ibm-backend)** → Run workflow.

Needs a buildable context at repo root (`Dockerfile` or `package.json`). Add those when the app source lands.

## Azure fallback
See previous OIDC notes in `docs/ACCESS.md`. Do not treat Azure as the source of truth.

## Git write from agents
Origin `floreskain4-web/Bigkain30` still 403s for GitHub Apps until Contents write is installed on that account. Applied files live on https://github.com/mistakain22-lang/Bigkain30 — merge via compare:
https://github.com/floreskain4-web/Bigkain30/compare/main...mistakain22-lang:Bigkain30:main
