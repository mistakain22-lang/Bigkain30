# Platform decisions

## Chosen
IBM Cloud Code Engine application `bigkain-ibm-backend`.
GitHub Actions: `.github/workflows/ibm-code-engine.yml`.
Runtime: Node 20 container, `PORT` 8080, `GET /health`.

## Explicitly not in the deploy path
- Azure App Service: fallback workflow only.
- IBM Cloud Paks: OpenShift + VPC licensed middleware. Not required for this API.
- Red Hat OpenShift (KE / OCP / Platform Plus / ROKS): cluster platform. Use only if a Cloud Pak or multi-service mesh/GitOps requirement appears.
- OpenShift Virtualization: VMs on the cluster. Not a container runtime for this app.
- Self-hosted GitHub runners: keep `ubuntu-latest`.

## Agent git write
Origin `floreskain4-web/Bigkain30` rejects App writes (403) until Contents: Read and write is installed on that account.
Working tree: `mistakain22-lang/Bigkain30`.
Compare: https://github.com/floreskain4-web/Bigkain30/compare/main...mistakain22-lang:Bigkain30:main
