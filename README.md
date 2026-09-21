# Bigkain30

IBM Cloud Code Engine app **bigkain-ibm-backend**.

Health: `GET /health` → `{ ok: true }`.
Container listens on `PORT` (default 8080).

## 100% go-live checklist

### GitHub (this fork or origin after merge)
- [ ] Secret `IBM_IAM_API_KEY`
- [ ] Vars if not using defaults: `IBM_REGION`, `IBM_RESOURCE_GROUP`, `IBM_CE_PROJECT`, `IBM_CE_APP`
- [ ] Environments `Development` and `Production`
- [ ] Actions default workflow permissions: Read
- [ ] Merge fork into origin: https://github.com/floreskain4-web/Bigkain30/compare/main...mistakain22-lang:Bigkain30:main

### IBM Cloud
- [ ] Project exists (default name `bigkain`)
- [ ] App `bigkain-ibm-backend` in that project (action can create/update)
- [ ] IAM API key is a **service ID** with only Code Engine access on that project
- [ ] Region matches `IBM_REGION`

### Agent git write (optional)
- [ ] As `floreskain4-web`, install ChatGPT and Grok GitHub Apps on `Bigkain30` with Contents: Read and write

## Run locally
```bash
npm start
curl -s localhost:8080/health
```
