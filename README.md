## Vulnerability PoC: Environment Variable Disclosure in Next.js Server Action

### Affected Version(s)
Tested on Next.js v14.x (latest stable at time of report).  
Please confirm reproducibility on current releases.

### Description
A misconfigured Next.js Server Action allows direct exfiltration of environment variables.  
By invoking the vulnerable action, an attacker can retrieve sensitive secrets such as `VERCEL_PLATFORM_PROTECTION`.

### Steps to Reproduce
1. Clone the repository:
   ```bash
   git clone https://github.com/OttoyRocky/vuln-nextjs.git
   cd vuln-nextjs
Create .env.local in the project root with:

bash
VERCEL_PLATFORM_PROTECTION=test_secret
Install dependencies:

bash
npm install
Start the server:

bash
npm run dev
Open http://localhost:3000 and click Run Server Action.
The environment variable value is displayed in the browser.

Impact
Attackers can directly extract environment variables from the server, including sensitive tokens, API keys, and infrastructure secrets.
Severity is Critical, as it compromises application and connected services.

Evidence
Screenshot: public/screenshot.png (add your capture here).

Public PoC repository: OttoyRocky/vuln-nextjs

Suggested Mitigation
Restrict access to process.env within Server Actions and enforce sanitization to prevent leakage.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
