Site template + GitHub Actions deploy

Overview
- This repo is a starter template for WrenchWorks Digital sites.
- It includes a GitHub Actions workflow to build and deploy to an SFTP/FTP host (HostGator).

How to use
1. Create a new GitHub repository (private or public) and push this template to it.
2. In the repo settings -> Secrets -> Actions, add the following secrets:
   - FTP_HOST (your HostGator FTP host)
   - FTP_USERNAME
   - FTP_PASSWORD
   - TARGET_DIR (optional; path on the server to upload to, e.g. public_html)
3. On push to main, the workflow will build (if needed) and deploy via SFTP.

Files included
- .github/workflows/deploy.yml — the deploy workflow
- starter/ — starter site files (place your theme / build output here)

If you want, I can push this template to a repo for you; you only need to add the secrets in GitHub and I’ll set the deploy schedule.