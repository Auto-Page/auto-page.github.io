# Auto-Page

Auto-Page is a one-person company platform.

The product vision is a public multi-user SaaS where anyone can sign up, create a private company workspace, and run a business objective through an AI-led organization. Each workspace is managed by an AI CEO that plans work, delegates tasks to AI employees across departments, reviews outputs, and returns consolidated recommendations to the user.

## Product Direction

Auto-Page is designed around two entry points:

1. Start with your own idea.
2. Start from the Idea Library if you do not have a business idea yet.

## Core Experience

The intended workflow is:

1. A user signs up and creates a company mission.
2. The user submits an idea, goal, or constraint set.
3. An AI CEO creates the plan and assigns work to AI departments.
4. AI employees execute across research, product, engineering, marketing, QA, and other functions.
5. The user can observe internal communication, while participation remains optional.
6. The AI CEO acts as the first-line clarifier for internal AI questions and only escalates to the user when needed.
7. The AI CEO delivers a final summary, department reports, risks, and next steps.

## Platform Requirements

Because this is a public platform, the product must support:

- Multi-user account management
- Google and email authentication
- Private workspace ownership
- Tenant-safe data isolation
- Authorization controls for all private resources
- Security and compliance foundations such as audit logs, privacy controls, and secure data handling
- A mobile app for users to check mission status and reports

## Current Repository Scope

This repository currently contains the marketing site and landing-page implementation for Auto-Page.

At this stage, the codebase is focused on:

- Presenting the product vision
- Positioning the one-person company concept
- Preserving the Idea Library as a visible product entry point
- Supporting static export and deployment to GitHub Pages

The full authenticated product, AI orchestration workflows, and private user workspaces are product requirements defined in the PRD and are not yet implemented in this repository.

## Product Reference

The primary product definition lives in [product/prd.md](product/prd.md).

That document covers:

- Product vision and goals
- User flows and use cases
- AI CEO and department-agent workflow
- Multi-tenant and authentication requirements
- Security, privacy, and compliance expectations
- MVP scope and future opportunities

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- TypeScript
- Static export via Next.js
- GitHub Pages deployment
- Dev Container workflow

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Run the production server locally when needed:

```bash
npm run start
```

## Deployment

This project is configured for static export.

- `npm run build` generates the export output.
- `npm run deploy` builds and publishes the static output to GitHub Pages.
- GitHub Actions can be used to automate deployment from the main branch.

## Near-Term Roadmap

- Update the landing page to reflect the one-person company platform positioning
- Add an Idea Library section or tab to the public site
- Define the authenticated product architecture for multi-user workspaces
- Design the AI CEO workspace and department activity views
- Define mobile app experience for status tracking and report reading
- Plan authentication, tenant isolation, and compliance foundations before building private product features