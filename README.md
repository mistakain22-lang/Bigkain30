# Bigkain30

IBM Cloud Code Engine app **bigkain-ibm-backend**.

Health: `GET /health`.
See `docs/PLATFORM.md` and `docs/ACCESS.md`.

## Go-live
1. Secret `IBM_IAM_API_KEY`
2. Vars as needed: `IBM_REGION`, `IBM_RESOURCE_GROUP`, `IBM_CE_PROJECT`, `IBM_CE_APP`
3. Environments `Development` / `Production`
4. Run workflow **IBM Code Engine (bigkain-ibm-backend)**
5. Merge fork to origin when App write exists

Not using Cloud Pak, OpenShift, or OpenShift Virtualization for this service.
