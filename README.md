# DocMind

AI-powered chat-with-your-documents SaaS app. Upload PDFs and ask questions grounded in your files, with page-level citations.

## Live Demo

Coming soon...

## Architecture

<!-- Add a Mermaid diagram or Excalidraw image here in Week 4 -->

## Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **Auth:** NextAuth.js (Google + Credentials)
- **Database & Vector Search:** MongoDB Atlas
- **AI / RAG:** Gemini / Claude API, custom PDF chunking & embeddings
- **Infra & Quality:** Redis (Upstash), Zod, Vitest, Docker, GitHub Actions, Sentry

## Local Setup

1. Clone the repo: `git clone https://github.com/<your-username>/docmind.git`
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in the required keys
4. Run the dev server: `npm run dev`
