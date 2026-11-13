# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: instructors, classmates, and evaluators of the GCM375 project-management course in Toronto, ON. They review the site as the public face of a student-led project. They need to understand what PrintSpeak is, what problem it tackles, who is on the team, and what the team has produced.

Secondary audience: members of the general public who come across the site and want to learn about accessible labelling.

## Product Purpose

PrintSpeak is a student-led initiative, created in a project-management course, that argues for accessible product labelling through talking labels. Talking labels are NFC/RFID labels that turn printed product information into spoken audio. The site educates visitors on what talking labels are, why traditional flat labels fail people with visual impairments or reduced eyesight, and what keeps businesses from adopting them.

Success means:
- Visitors come away understanding talking labels and why accessible packaging matters (awareness and education).
- The site works as a credible course deliverable that presents the team, its values, and its work.

## Positioning

A student team treating accessible packaging as a project-management problem. They frame talking labels as something that should be standard practice, not an afterthought, and they explain both the technology and the adoption barriers in plain language.

## Operating Context

- A static multi-page site at printspeak.ca, hosted on GitHub Pages: Home, About, Team, Blog (Journal), Contact.
- The blog is the main content channel. New posts are made by copying `blog/talking-labels.html` and editing its EDIT regions. The blog index has placeholder "coming soon" slots for upcoming posts.
- Team: a PM group, a Creative team, and a Research team. Their photos are in `img/team_imgs/`, and their data is in `js/team-data.js`.
- Contact goes through email (official.printspeak@gmail.com), Instagram, and LinkedIn. There's no form or backend.

## Capabilities and Constraints

- Stack: plain static HTML with Tailwind (`js/tailwind-config.js`), `styles.css`, and small vanilla JS. Node is used only for the Playwright and axe end-to-end tests, not for building.
- Terminology: "talking labels", "NFC", "RFID", "print comes alive".
- Some content is unfinished: a group photo and a medication-bottles photo are placeholders, and blog posts #3 and #4 are "coming soon".

## Brand Commitments

- Name: PrintSpeak. Tagline: "Where Print Comes Alive". Also uses "PrintSpeak breathes life into print."
- Logo assets: `img/logoPrimary.png`, `img/logoPrimaryClear.png`, `img/logoSecondary.png`, `img/favicon.png`.
- Stated values: Respect, Collaboration, Innovation, Inclusion.
- Canadian spelling ("colours").

## Evidence on Hand

- Two published blog posts: `blog/talking-labels.html` and `blog/accessibility-standard-practice.html`, with illustrations in `img/blog/`.
- Team and individual photos in `img/team_imgs/`.
- No survey results, field-study findings, statistics, partner quotes, or testimonials exist yet; the research is still in progress. Future work must not invent or imply results, numbers, partners, or endorsements. Existing copy that mentions "field studies, insider data, and extensive research" describes the approach, not results that can be cited.

## Product Principles

1. Explain before persuading: the first job is helping visitors understand talking labels and why they matter.
2. Practise what we preach: as an accessibility advocate, the site must itself be fully accessible.
3. Be honest about stage: this is a student project with research in progress, so claim only what exists.
4. Make it easy to keep current: students without build tooling must be able to add posts and swap in photos.

## Accessibility & Inclusion

- Target: WCAG 2.2 AA, enforced by axe checks in `tests/e2e/accessibility.spec.js` (wcag2a/aa, wcag21a/aa, wcag22aa, best-practice).
- The subject audience is people with visual impairments or reduced eyesight, so contrast, text scaling, screen-reader structure, and non-visual alternatives for imagery matter more than usual.
