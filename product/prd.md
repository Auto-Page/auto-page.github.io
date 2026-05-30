# One-Person Company Platform PRD

## 1. Product Summary

### Working Title
One-Person Company Platform

### Product Vision
Build a multi-tenant public platform where many real people can register, create accounts, and run their own companies with the support of a coordinated AI workforce. Each user owns one or more company workspaces. The human provides the business goal, idea, constraints, and clarifications when needed. The platform then assigns an AI CEO to lead a team of AI employees across departments such as product, research, engineering, design, marketing, operations, finance, and QA. The AI CEO owns planning, delegation, decision making, review, and final delivery.

### Core Promise
The user should be able to say, "Build and operate this business objective for me," and watch an AI-led company execute the work with transparent communication, structured reports, and limited but useful opportunities for human clarification. User participation in internal AI conversations is optional by default, and the AI CEO is the first-line clarifier for questions raised during execution.

## 2. Background And Opportunity

Many people have ideas but do not have the time, skill breadth, or team required to turn those ideas into a real business. Current AI tools still expect the user to act as the manager, coordinator, and decision maker. That creates a large execution gap.

This product addresses that gap by creating an AI-native company structure:
- The real person raises an idea, goal, or problem.
- The AI CEO interprets the request, defines the plan, and makes execution decisions.
- AI employees perform work inside their departments.
- Department outputs flow back to the AI CEO for consolidation and review.
- The real person receives progress visibility and final recommendations without needing to manage the workflow themselves.

This must work as a public product, not a private operator tool. The platform needs to support many concurrent users, secure account creation, tenant-safe data boundaries, and a security posture strong enough for users to trust the platform with business ideas, plans, and internal company artifacts.

The existing idea-list community can become one entry point into this platform. Users without a business idea can browse curated startup ideas, select one, and launch a one-person company workflow from it.

## 3. Problem Statement

People who want to build a business often face three problems:
- They do not know what idea to pursue.
- They do not have the cross-functional team required to execute.
- They are forced to coordinate many tools and decisions themselves, even when using AI.

The platform should solve all three by combining idea discovery with AI-led execution.

## 4. Goals

### Business Goals
- Help users go from idea to execution faster than traditional solo entrepreneurship.
- Position the platform as an operating system for AI-native micro-companies.
- Turn the current idea community into a top-of-funnel acquisition surface.
- Create a premium product users will pay for when they need coordinated execution instead of isolated AI chats.
- Build a trusted public SaaS platform with secure onboarding and account-level isolation.

### User Goals
- Submit an idea, business objective, or problem statement in plain language.
- Let AI handle planning and decision making by default.
- Observe what the AI company is doing at any time.
- Intervene only when clarification or strategic direction is necessary.
- Receive structured outputs, reports, and recommendations from the AI CEO.

### Product Goals
- Make the AI CEO feel like the single accountable interface.
- Make AI employee collaboration visible and understandable.
- Keep the human optional in the workflow, not operationally required.
- Support both "I already have an idea" and "I need an idea" entry paths.
- Support many users and many company workspaces without cross-account data leakage.
- Meet baseline security and compliance expectations for a public-facing SaaS product.

## 5. Non-Goals For MVP

- Replacing all legal, accounting, or regulatory professional advice.
- Fully autonomous external actions with no safeguards, such as signing contracts or moving money.
- Supporting complex multi-founder governance or org structures.
- Building a full enterprise-grade ERP suite in the first release.
- Guaranteeing business success or market fit.
- Achieving every enterprise certification in the first release; MVP should instead establish a credible security and compliance foundation.

## 6. Target Users

### Primary Users
- Solo founders
- Indie hackers
- Creators exploring productized businesses
- Operators validating new business lines
- Non-technical people with strong domain ideas
- Registered public users signing in with Google or email

### Secondary Users
- Early-stage startup teams using AI to simulate full departments
- Agencies or consultants testing business concepts for clients
- Community members browsing business ideas before committing

## 7. Product Principles

- AI-first execution: the platform should not depend on continuous human management.
- CEO-led coordination: the AI CEO is the decision hub and final owner of output quality.
- Transparent reasoning: users can inspect inter-agent communication and task history.
- Human override, not human burden: the user can step in, but the system should not require it.
- Department-based structure: work should feel like a real company operating model.
- Actionable output: every workflow should end with concrete deliverables, not only discussion.
- Secure by default: account isolation, auth controls, auditability, and privacy protections are core product requirements.

## 8. User Experience Overview

The platform has two main entry points:

### Entry Point A: Start With An Idea
The user provides:
- Business idea or goal
- Desired outcome
- Constraints such as budget, timeline, market, skills, or risk tolerance

The platform responds by:
- Assigning an AI CEO
- Creating an initial operating plan
- Spawning department tasks
- Running execution cycles
- Reporting back through the AI CEO

### Entry Point B: Start From Idea Library
The current idea-list community becomes a separate tab or section on the landing page. Users can:
- Browse curated business ideas
- Filter by category, difficulty, capital required, or business model
- Select an idea and launch it into the one-person company workflow
- Ask the AI CEO to adapt the selected idea to their profile or constraints

## 9. Core Workflow

### Step 1: Human Raises A Goal
The real person submits a prompt such as:
- "I want to build a niche SaaS for property managers."
- "Find me a micro-business idea I can launch in 30 days with a small budget."
- "Turn this idea into a launch plan and first MVP."

### Step 2: AI CEO Interprets And Plans
The AI CEO:
- Clarifies the business objective
- Breaks the objective into workstreams
- Decides which departments are needed
- Creates milestones, priorities, and success criteria

### Step 3: AI Employees Execute By Department
Example departments:
- Research: market analysis, competitor review, customer segmentation
- Product: product scope, feature prioritization, roadmap
- Design: brand direction, wireframes, content structure
- Engineering: architecture, build plan, implementation tasks
- Marketing: positioning, messaging, launch plan, channels
- Sales: target leads, outreach strategy, qualification criteria
- Operations: workflows, SOPs, support processes
- Finance: pricing logic, unit economics, budget assumptions
- Legal and compliance support: lightweight issue flagging and checklist generation
- QA and verification: test plans, consistency checks, output review

### Step 4: AI CEO Reviews And Decides
The AI CEO:
- Reviews department outputs
- Resolves conflicts between departments
- Requests revisions where needed
- Makes tradeoff decisions without requiring user input by default

### Step 5: Human Visibility And Clarification
The user can:
- View discussions between the AI CEO and AI employees
- Inspect plans, tasks, assumptions, and reports
- Optionally join the conversation to clarify intent or constraints
- Approve, pause, redirect, or stop work if desired

Default clarification behavior:
- The AI CEO handles first-line clarification with AI employees before involving the user.
- The user is only asked when goals, constraints, or business direction are ambiguous or changed.

### Step 6: Final Delivery
The AI CEO returns a consolidated response to the human that may include:
- Executive summary
- What each department did
- Key decisions and why they were made
- Deliverables produced
- Risks and open issues
- Recommended next steps

## 10. Primary Use Cases

### Use Case 1: Build A Business From Scratch
The user has a rough idea and wants the platform to plan and execute validation, positioning, MVP definition, and launch preparation.

### Use Case 2: Start With No Idea
The user browses the idea library, chooses one concept, and asks the AI company to validate and operationalize it.

### Use Case 3: Run A Specific Departmental Task
The user wants a narrower outcome, such as a go-to-market plan, market research package, or product requirements set, while still using the AI CEO to coordinate quality.

### Use Case 4: Observe AI Company Collaboration
The user wants transparency into how the AI CEO instructs departments, how departments challenge each other, and how decisions are finalized.

### Use Case 5: Public User Account And Workspace Ownership
The user signs up with Google or email, creates a private account, and manages one or more company missions and artifacts under that account without exposure to other users.

## 11. Functional Requirements

### 11.1 Authentication And Accounts
- Users can register and sign in with Google OAuth.
- Users can register and sign in with email-based authentication.
- The platform supports email verification, password reset, and session management for email-based accounts.
- Each user has a unique account profile and private workspace ownership boundary.
- The system should support future expansion to additional identity providers without redesigning the auth model.

### 11.2 Multi-User Workspace Isolation
- The platform is multi-tenant and must isolate each user's missions, conversations, artifacts, and settings.
- Users can create and manage multiple company missions under one account.
- Access to private company workspaces must be restricted to authorized users only.
- System-level agent execution must respect tenant boundaries when reading context and writing artifacts.
- Public content such as the idea library must be logically separated from private company data.

### 11.3 Intake And Setup
- Users can create a new company mission from a freeform prompt.
- Users can optionally select an idea from the idea library.
- Users can provide profile details such as experience, available capital, target market, and available time.
- The system creates a company workspace for each mission.

### 11.4 AI CEO Workspace
- The system assigns an AI CEO as the primary visible agent.
- The AI CEO creates an execution plan with goals, tasks, departments, and milestones.
- The AI CEO can request clarification from the user when confidence is low or constraints are missing.
- The AI CEO can revise plans based on new user instructions.
- The AI CEO is the default first-line decision and clarification layer for inter-agent questions.

### 11.5 Department Agents
- The system can instantiate specialized AI employees by department.
- Each department can receive tasks from the AI CEO and return structured outputs.
- Departments can communicate with the AI CEO and, where allowed, with other departments.
- Department outputs should be stored as artifacts with timestamps and status.

### 11.6 Collaboration Visibility
- Users can view conversation threads between the AI CEO and department agents.
- Users can filter activity by department, task, status, or date.
- Users can inspect previous decisions, revisions, and reports.

### 11.7 Human Participation Controls
- Users can comment on any active task or conversation.
- Users can answer clarification requests.
- Users can change strategy, priorities, or constraints mid-process.
- Users can choose between low-involvement mode and collaborative mode.
- The default mode keeps user participation optional and escalates to the user only when necessary.

### 11.8 Reporting And Deliverables
- Each department produces a report or artifact relevant to its work.
- The AI CEO produces a final consolidated report for the user.
- Users can export final outputs in readable formats such as markdown, PDF, or shareable links.
- The system maintains version history for important outputs.

### 11.9 Idea Library Integration
- The landing page includes a dedicated tab or navigation item for idea discovery.
- Users can browse community-generated and platform-curated business ideas.
- Each idea can include summary, problem, target user, effort level, monetization model, and launch angle.
- Users can click "Start this company" to create a mission from an idea.

### 11.10 Authorization And Permissions
- The system enforces authorization checks on every private read and write action.
- Users can access only their own private missions, reports, conversations, and settings unless explicit sharing is introduced in a later phase.
- Admin access, support access, and internal operations access must be role-based and auditable.
- Sensitive actions such as deleting a mission, exporting data, or changing account ownership should require additional confirmation.

### 11.11 Security, Privacy, And Compliance
- All sensitive user and mission data must be encrypted in transit and encrypted at rest where applicable.
- The platform must maintain audit logs for authentication events, major account actions, and critical workflow changes.
- The system must minimize data collection and clearly communicate how user data is stored and processed.
- Users must be able to access core privacy controls such as account deletion and data export.
- The product must establish a compliance roadmap for baseline public SaaS expectations, including privacy policy, terms of service, incident response process, and security review practices.
- The architecture should be designed to support later compliance targets such as SOC 2 readiness, GDPR support, and region-specific privacy obligations.

### 11.12 Mobile App Experience
- The platform provides a mobile app for authenticated users.
- Users can view mission status, milestones, and current execution phase on mobile.
- Users can read AI CEO summaries and department reports on mobile.
- Users can receive mobile notifications for major mission updates and report delivery.
- Mobile access must enforce the same account isolation and authorization rules as web.

## 12. MVP Scope

### In Scope
- Landing page positioning for the one-person company platform
- Separate idea-library tab or section
- Public user registration with Google and email
- Mission intake form
- Multi-tenant account and workspace model
- AI CEO orchestration layer
- A small set of initial departments: research, product, engineering, marketing, and QA
- Shared conversation timeline
- Department reports
- Final AI CEO summary and recommendations
- Foundational auth, authorization, audit logging, and privacy controls
- Mobile app support for mission status tracking and report viewing

### Out Of Scope For MVP
- Autonomous payment handling
- Live integrations with external business systems
- Advanced team billing and permissions
- Large-scale public marketplace for third-party agents
- Deep legal or financial automation beyond guidance
- Full enterprise compliance certification before launch

## 13. Information Architecture

### Public Landing Page
- Home
- Idea Library
- How It Works
- Pricing
- Sign In / Start Company
- Security

### Mobile App
- Status
- Reports
- Notifications

### Authenticated Product Areas
- Dashboard
- Company Missions
- AI CEO Chat
- Department Activity
- Artifacts And Reports
- Idea Library
- Account And Security Settings
- Settings

## 14. Key Screens

### Landing Page
Explains the concept of an AI-run one-person company, shows core value propositions, and provides clear calls to action for starting with an idea or browsing the idea library.

### Sign Up And Authentication
Supports Google sign-in and email registration, explains trust and privacy basics, and gives users a secure entry point into their private workspace.

### Idea Library
Displays curated startup and business ideas with filters and a launch action.

### Mission Creation Flow
Captures the user goal, constraints, expected outcome, and preferred level of involvement.

### Company Workspace
Shows the AI CEO summary, mission status, current milestones, active departments, and recent activity.

### Communication Timeline
Lets the user inspect conversations between agents and add clarifications.

### Final Report View
Shows the AI CEO executive summary plus department reports and recommended next actions.

### Mobile Status And Reports
Allows users to monitor mission progress and read department and CEO reports from a mobile app.

## 15. User Stories

- As a solo founder, I want to submit a business goal and let AI structure the work so I do not need to act as project manager.
- As a user without an idea, I want to browse validated business concepts and launch one into execution.
- As a user, I want to inspect AI decision making so I can trust the output.
- As a user, I want to step in only when clarification is needed.
- As a user, I want a final CEO-level summary instead of reading every department report in full.
- As a user, I want each department's work preserved so I can reuse it later.
- As a public user, I want to sign up securely with Google or email so I can access my company workspace from any device.
- As a user, I want my company data to stay private to my account so other users cannot see my ideas, conversations, or reports.
- As a user, I want the AI CEO to handle most clarification first so I only participate when needed.
- As a user, I want a mobile app where I can quickly check company status and reports.

## 16. Success Metrics

### Product Metrics
- Percentage of users who create a mission after visiting the landing page
- Percentage of idea-library visitors who start a company from an idea
- Average number of completed missions per active user
- Percentage of missions that reach final CEO report delivery
- Average time from mission creation to first usable output
- Sign-up conversion rate by auth method
- Activation rate from registered user to first mission
- Mobile weekly active users for status and report views

### Quality Metrics
- User-rated usefulness of final CEO reports
- User-rated clarity of AI decision making
- Revision rate after final delivery
- Frequency of required human intervention per mission
- Authentication success rate and account recovery success rate

### Security Metrics
- Number of authorization incidents or cross-tenant access failures
- Percentage of critical security events captured in audit logs
- Mean time to detect and resolve security incidents
- Percentage of users who complete email verification when using email sign-up

### Business Metrics
- Conversion from visitor to signed-up user
- Conversion from free to paid plan
- Retention of users who start at least one mission

## 17. Risks And Challenges

- Users may overtrust autonomous AI decisions in areas that still require human judgment.
- Agent orchestration may become noisy or confusing if communication is not structured well.
- The AI CEO role must feel competent and consistent, or the product loses credibility.
- Department overlap may produce redundant or conflicting outputs.
- Expectations around autonomy must be managed carefully in early versions.
- Public multi-user architecture increases the risk of account abuse, spam, and unauthorized access.
- Weak tenant isolation would be a product-critical failure.
- Compliance promises may outpace actual implementation if not scoped carefully.

## 18. Guardrails

- Important assumptions should be visible to the user.
- High-risk recommendations should be flagged clearly.
- The system should ask for confirmation before irreversible external actions.
- All major decisions and revisions should be logged.
- The platform should distinguish between generated advice, verified facts, and open assumptions.
- Private user data must never be exposed across tenants.
- Authentication flows should include rate limiting, verification, and secure session handling.
- Security-sensitive events should trigger alerts and be reviewable by internal operators.
- Public compliance claims should match implemented controls and documented policy.

## 19. Future Opportunities

- More specialized departments such as customer support, recruiting, partnerships, and content production
- Integration with execution tools such as email, CRM, project management, and deployment pipelines
- Industry-specific company templates
- Shared community templates for different business types
- Benchmarks across launched missions and idea performance
- Team workspaces with controlled collaboration beyond the single-owner MVP model

## 20. Open Questions

- What level of autonomy should the AI CEO have for external actions in the first paid version?
- Should users be able to choose different CEO styles, such as conservative, aggressive, or lean?
- Which department set should ship first to maximize perceived value?
- How should the platform score confidence and verification quality across departments?
- What is the pricing model: per mission, subscription, usage-based, or hybrid?

## 21. Recommended MVP Positioning

Suggested positioning statement:

"Launch and run a one-person company with an AI CEO and AI employees. Bring the idea, watch the company work, and step in only when you want to."

Suggested supporting message for the idea library:

"No business idea yet? Browse curated opportunities and start your company from a proven concept."

