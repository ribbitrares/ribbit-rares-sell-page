# Ribbit Rares Pokémon Collection Buying Landing Page

This is a deploy-ready React/Vite landing page for buying Pokémon card collections.

## What is included

- One-page landing page
- Seller intake form layout
- Multiple photo upload field in preview mode
- Instagram/Facebook call-to-action buttons
- No Lucide, shadcn, or Tailwind dependencies
- Stable Vercel-ready React project

## Important before going live

The built-in form is currently in preview/demo mode. It shows a success screen but does not send leads anywhere yet.

For live use, connect one of these:

1. Jotform embedded form — recommended for Pokémon collection photo uploads
2. Tally embedded form
3. Formspree endpoint
4. Netlify Forms

## Replace these placeholders

In `src/App.jsx`, replace:

- `https://instagram.com/yourhandle`
- `https://facebook.com/yourpage`

With your actual business links.

## How to run locally

```bash
npm install
npm run dev
```

## How to deploy on Vercel

1. Create a GitHub repository.
2. Upload these project files.
3. Go to Vercel.
4. Click Add New Project.
5. Import the GitHub repository.
6. Click Deploy.
7. Test the live link on your phone.
8. Connect your custom domain.

## Recommended live form setup

Use Jotform for the actual collection intake form.

Recommended fields:

- Name
- Phone or email
- Instagram/Facebook handle
- City/state
- Local pickup or shipping
- What are you selling?
- Approximate collection size
- Asking price
- Multiple photo upload
- Collection notes

Then either embed the Jotform directly in the landing page or link the main button to the Jotform.
