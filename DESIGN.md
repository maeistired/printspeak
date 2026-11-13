---
name: PrintSpeak
description: Where Print Comes Alive
colors:
  primary: "#112250"
  accent: "#0FA3B1"
  accent-text: "#0A7C87"
  highlight: "#B5E2FA"
  surface: "#D2F898"
  secondary: "#72B01D"
  neutral-bg: "#FAFAFA"
  white: "#FFFFFF"
  border: "#E5E5E5"
  control-border: "#CBD5E1"
  muted: "#64748B"
  text-muted: "#52617A"
typography:
  display:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  tagline:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 5vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body-long:
    fontFamily: "'Lexend', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "'Lexend', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Lexend', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.75rem"
  pill: "9999px"
spacing:
  xs: "0.25rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "3rem"
  section-sm: "2rem"
  section: "4rem"
  section-lg: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-text}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
  button-on-dark:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.25rem"
  button-on-dark-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
  button-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    height: "2.75rem"
  button-pill-hover:
    backgroundColor: "{colors.accent-text}"
  tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "0"
    padding: "0.75rem 0"
    height: "2.75rem"
  input-on-dark:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "0.75rem"
  nav:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    height: "4rem"
---

# Design System: PrintSpeak

## Overview

**Creative North Star: "The Living Label"**

PrintSpeak's site should read the way a good product label ought to: you can see straight away what it is, what matters, and where to go next. Its look is calm, trustworthy and plain-spoken. It has the honesty of careful course work, and its colour comes from the subject itself: water-and-leaf greens and blues on a deep harbour navy. Every page has one dominant message and keeps its content close to the reader, and colour blocks do the work of separating sections.

Legibility is the identity. The two typefaces were chosen because they were designed for low-vision and dyslexic readers: Atkinson Hyperlegible for headings and Lexend for reading. The site argues for accessible labelling, so it has to pass its own test. That means high contrast, large tap targets, a visible focus state on everything interactive, and motion that stops when a visitor asks it to. Imagery is real or honestly marked as a placeholder. No stock-photo filler stands in for research that does not exist yet.

Pages are built from full-width bands of colour (Lagoon Teal hero, Midnight Harbour statements, Morning Sky calls to action) with plain white or Cloud bands of reading content between them. Inside those bands, white cards with gentle rounding hold discrete items such as posts, values and team members.

**Key Characteristics:**
- Full-width colour bands set the rhythm; content sits in a 72rem column with 1.5rem gutters.
- Two legibility-first typefaces: Atkinson Hyperlegible for headings, Lexend for body and UI.
- Midnight Harbour navy carries text and authority; Lagoon/Deep Lagoon teal marks action; Spring Shoot lime marks emphasis on dark ground.
- Flat colour does the layering; shadows stay faint and grow only when a clickable card is hovered.
- Sturdy, friendly components: bold labels, 44px+ targets, gentle 6–12px rounding.

## Colors

A cool water-and-leaf palette anchored by one deep navy. The navy does almost all the talking, and the teals and greens are used as signals.

### Primary
- **Midnight Harbour** (`primary`): the voice of the site. All body text, every heading, the nav wordmark, and the full-width dark bands (about hero, statement, compact contact block). On white or Cloud it gives very high contrast, and it is the hover colour that teal buttons settle into.

### Secondary
- **Lagoon Teal** (`accent`): the brand teal. The home hero band, every focus outline (3px, offset 3px), footer contact icons and value-card icons. It is too light for white body text or for text on light ground, so it is used only for fills, outlines and icons.
- **Deep Lagoon** (`accent-text`): the accessible teal. It is darkened from Lagoon Teal to reach at least 4.7:1 against white. Use it for primary button fills, eyebrows and section labels, inline and "Read more" links, the active nav link, the footer tagline and the back-to-top button.

### Tertiary
- **Spring Shoot** (`surface`): the lime highlight. Topic tags, buttons and eyebrows that sit on a Midnight Harbour band, the statement's accent rule, and one of the team-photo backdrops. It always sits next to navy, never next to white text.
- **Morning Sky** (`highlight`): soft blue wash. The calls-to-action band, image placeholders, "coming soon" card thumbnails, and intro copy inside the compact contact block.
- **Fern** (`secondary`): leaf green. It is reserved for the 0.25rem blockquote rule in blog posts. The rule is defined in `.post-body` but no published post uses a blockquote yet.

### Neutral
- **Cloud** (`neutral-bg`): the page ground, the nav bar and the footer.
- **Pure White** (`white`): cards, dialogs, form fields on dark, and alternating content bands.
- **Mist Line** (`border`): hairline dividers under the nav, above the contact section and in the footer bottom bar.
- **Pebble** (`control-border`): 1px outline on boxed form controls.
- **Dusk Slate** (`text-muted`): secondary text such as post meta, bylines, team roles and footer small print.
- **Slate** (`muted`): text on "coming soon" placeholder cards only.

### Named Rules
**The Two Teals Rule.** Lagoon Teal fills, outlines and decorates; Deep Lagoon carries text and white-on-teal labels. Small text never goes in Lagoon Teal, and white text never sits on it.

**The Navy Voice Rule.** Midnight Harbour is the only text colour for headings and body copy on light ground. Hierarchy comes from size, weight and Dusk Slate, never from extra hues.

**The Lime-On-Navy Rule.** On a Midnight Harbour band, emphasis (eyebrows, primary buttons, rules, inline links) moves to Spring Shoot, and secondary copy may use Morning Sky.

## Typography

**Display Font:** Atkinson Hyperlegible (with Arial, sans-serif)
**Body Font:** Lexend (with Arial, sans-serif)

**Character:** Both faces exist to be read by people who find standard type hard. Atkinson's distinct letterforms give headings a steady, civic plainness, and Lexend's open spacing keeps long explanations unhurried. Only weights 400 and 700 are loaded for each face.

### Hierarchy
- **Display** (700, 3rem / 48px, 1.1): page H1s such as the about hero, the journal header and blog post titles. Blog and journal H1s step down to 2.25rem below 768px.
- **Tagline** (400, clamp(1.25rem, 5vw, 2.25rem), 1.2): only the "Where Print Comes Alive" line under the hero logo. It is the one heading that is regular weight by intent.
- **Statement** (700, 2.5rem, 1.15): the centred pull-quote on a Midnight Harbour band.
- **Headline** (700, 2.25rem, 1.15): section H2s (about sections, CTA band). Section headers that open a whole listing, such as "Our Blog", go up to 3rem, and the contact heading is 2.75rem.
- **Title** (700, 1.5rem, 1.25): card titles, team names and values cards. In-article H2s use 1.875rem at 768px and above, and in-article H3s use 1.25–1.5rem.
- **Body Long** (400, 1.125rem, 1.625): blog post bodies (max 65ch), split-section copy, card summaries and hero sublines.
- **Body** (400, 1rem, 1.5): UI text, meta lines, footer links.
- **Label** (700, 0.875rem, 0.08em, uppercase): eyebrows and section labels in Deep Lagoon, or Spring Shoot on navy. Topic tags use the same size and weight but in sentence case, without tracking.

### Named Rules
**The Bold Heading Rule.** Every Atkinson heading is weight 700 with −0.01em tracking. The single exception is the hero tagline, which is set regular. *Known drift:* Tailwind's CDN preflight is injected after `styles.css` and resets `h1–h6` to `font-weight: inherit`. As a result, most headings currently render at 400, and only `.post-body` subheads, team names, the Team H1 and the statement quote show 700. The fix is to restore 700 in the shipped CSS. Do not adopt regular-weight headings as the pattern.

**The Two-Weight Rule.** Use only 400 and 700. Intermediate values in the CSS (550 on the nav wordmark, 600 on the statement quote) resolve to 700 because no other weights are loaded. New work should declare 700.

## Layout

Pages stack full-width bands. Each band contains a centred column of max 72rem (Tailwind `max-w-6xl`) with 1.5rem side gutters. Blog posts narrow to a 48rem column (`max-w-3xl`), and their body text caps at 65ch.

- **Section rhythm:** standard bands use 4rem vertical padding, rising to 5rem at 640px and above. About-page sections use 6rem. Compact bands such as the home contact block use 2rem. Page `main` areas open with 6rem top padding.
- **Split sections:** one column on mobile; two equal columns with a 3rem gap at 768px and above, vertically centred. `.split-reverse` swaps the image to the other side on alternate rows.
- **Card grids:** a 2rem gap. Blog cards: one column, two at 768px. Value cards: one, two (640px) and four (1024px) columns. Team: one, two (640px) and three (1024px) columns with a generous 4rem gap.
- **Hero:** fills the viewport below the nav (`100svh − 4rem`), centred stack with a 3.5rem gap. The logo is clamped to between 14rem and 32rem, at 70vw.
- **Breakpoints:** 640px (sm), 768px (md; the nav switches to a hamburger below 768px), 1024px (lg).
- **Sticky nav:** 4rem tall. Anchor targets use `scroll-margin-top: 4rem` so headings clear it.

## Elevation & Depth

Depth comes from flat colour. Full-width bands in Midnight Harbour, Lagoon Teal and Morning Sky separate the page into layers, and nothing floats above them. Shadows are faint, navy-tinted and functional: a whisper at rest marks a card's edge on Cloud ground, and a softer, larger shadow plus a 0.25rem rise appears only when a card can be clicked.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 1px 3px rgb(17 34 80 / 8%)`): every card and team card at rest. Static cards stay here even on hover.
- **Card lift** (`box-shadow: 0 10px 25px rgb(17 34 80 / 12%)` + `translateY(-0.25rem)`): hover state of clickable cards only.
- **Field focus halo** (`box-shadow: 0 0 0 2px rgb(15 163 177 / 20%)`, or `0 0 0 3px #0FA3B1` on dark): boxed form controls on focus.
- **Dialog scrim** (`rgb(17 34 80 / 65%)`): the backdrop behind the team-member dialog.

### Named Rules
**The Lift Means Click Rule.** A card rises only if the whole card is a link or button. Static information cards (values, "what we do", "coming soon") stay flat at rest shadow.

**The Flat Band Rule.** Coloured bands never carry shadows, gradients or overlays. A change of colour is the separation.

## Shapes

Gentle, consistent rounding that reads as friendly without becoming bubbly. Cards, images, dialogs and photo frames use 0.75rem. Buttons and inline imagery inside cards use 0.5rem. Boxed inputs and the older `.brand-button` use 0.375rem. Topic tags and the contact "Send message" button are full pills. Underline-style form fields on the contact page are square, with only a 2px navy baseline that thickens to 3px Lagoon Teal on focus. One deliberate asymmetry exists: the contact-page photo uses `0.5rem 2.5rem 0.5rem 0.5rem`, so one corner is larger, like a peeled label. Borders are rare: hairline Mist Line dividers, a 2px current-colour outline on outline buttons, and a 0.25rem Fern rule on blockquotes.

## Components

### Buttons
Sturdy and friendly. Bold Lexend labels, obvious fills, and colour that shifts on hover with no change in size.
- **Shape:** gently curved (0.5rem); pill variant fully rounded.
- **Primary:** Deep Lagoon fill, white 700 label, 0.75rem × 1.25rem padding. Hover settles to Midnight Harbour (0.2s ease).
- **On dark (about hero):** Spring Shoot fill with Midnight Harbour label; hover to white.
- **On Morning Sky (CTA band):** Midnight Harbour fill with white label; hover to Deep Lagoon.
- **Outline:** transparent with a 2px current-colour border, inheriting the band's text colour. Hover fills with the opposite colour (white on navy, navy on sky).
- **Pill:** Midnight Harbour fill, min-height 2.75rem, full radius, used to submit forms. In the compact contact block it becomes Spring Shoot with a navy label, aligned right.
- **Focus:** 3px Lagoon Teal outline, offset 3px, on every interactive element.

### Chips
- **Topic tag:** Spring Shoot pill, Midnight Harbour 0.875rem bold label, 0.25rem × 0.75rem padding. Each card has one tag, naming the post category ("Basics", "Industry").

### Cards / Containers
- **Corner Style:** 0.75rem.
- **Background:** Pure White on Cloud ground.
- **Shadow Strategy:** card rest; card lift on hover only when clickable (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** 1.5rem. Blog cards contain a 16:9 image (0.5rem radius), a tag, a title link whose `::after` stretches over the whole card, a Body Long summary, and an underlined Deep Lagoon "Read more →".
- **Coming soon:** same card with a Morning Sky 16:9 block, Slate text, no lift, default cursor.
- **Focus:** `:focus-within` draws a 2px Lagoon Teal outline around the whole card.

### Inputs / Fields
- **Underline (contact page):** transparent, no box, 2px Midnight Harbour baseline, min-height 2.75rem. On focus the baseline becomes 3px Lagoon Teal.
- **Boxed on dark (compact contact):** white fill, 0.375rem radius, 0.75rem padding, white label text. On focus: Lagoon Teal border plus a 3px Lagoon Teal halo.
- **Labels:** Atkinson 0.875rem bold in Midnight Harbour. "(required)" sits in regular Lexend in Dusk Slate.

### Navigation
- **Bar:** sticky, 4rem, Cloud fill, Mist Line hairline beneath. Atkinson wordmark "PrintSpeak" on the left in Midnight Harbour (hover Deep Lagoon); links on the right in Lexend 0.875rem, with a 1.75rem gap.
- **States:** hover and `aria-current="page"` both turn the link Deep Lagoon.
- **Mobile (< 768px):** 44px hamburger whose lines morph into an ×. The panel drops down full-width with 1rem-padded rows, fading and sliding 0.5rem over 0.18s. With reduced motion there is no transition.

### Footer
Cloud ground with a Midnight Harbour top rule. Wordmark, Deep Lagoon tagline, short about line and location on the left. Columns for pages and recent posts sit on the right. A bottom bar holds the copyright, social icons and a small square Deep Lagoon back-to-top button.

### Colour Band Sections (signature)
The site's signature unit is a full-width band of a single brand colour carrying one message:
- **Hero band:** Lagoon Teal, the white logo and a Midnight Harbour tagline, with a slowly bobbing scroll chevron (2.5s; disabled under reduced motion).
- **Statement band:** Midnight Harbour, centred, a 4rem × 0.25rem Spring Shoot rule above a bold pull-quote.
- **CTA band:** Morning Sky, a navy headline and a pair of buttons.
- **Compact contact band:** Midnight Harbour, heading and intro on the left, boxed form on the right from 1024px.

### Team Card & Dialog
White card with a square photo frame (0.75rem radius) whose backdrop rotates through Spring Shoot, Morning Sky and Cloud. If the photo is missing, the frame shows the member's initials in large Atkinson 3rem bold. Clicking opens a 40rem dialog with a navy scrim, scaling in from 96% over 0.2s, with the photo and bio side by side from 640px. Deep links pulse a 4px Lagoon Teal ring on arrival.

## Do's and Don'ts

### Do:
- **Do** take every colour from the `--brand-*` custom properties in `styles.css` (exposed to Tailwind as `primary`, `accent`, `accent-text`, `highlight`, `surface`, `secondary`, `neutral-bg`, `ink`), never from hard-coded hex values.
- **Do** use Deep Lagoon (#0A7C87) for any teal text or any teal fill behind white text; keep Lagoon Teal (#0FA3B1) for large fills, outlines and icons.
- **Do** set Atkinson headings at 700 and make sure the weight survives Tailwind's preflight (add `font-bold` or restore it in shared CSS).
- **Do** give every interactive element a 3px Lagoon Teal focus outline with 3px offset, and a target of at least 2.75rem (44px).
- **Do** wrap every transform or animation in `prefers-reduced-motion` handling, as the existing nav, cards, hero chevron and dialog already do.
- **Do** mark missing photography with the Morning Sky placeholder (icon plus "… coming soon", `role="img"` with a label) until the real image exists.
- **Do** build new sections as single-colour bands with one message, alternating with white or Cloud reading bands.

### Don't:
- **Don't** put white or small text on Lagoon Teal, or Lagoon Teal text on white; both fail WCAG AA.
- **Don't** introduce weights other than 400 and 700, or a third typeface.
- **Don't** make static cards lift on hover; the rise means "this is clickable".
- **Don't** add gradients, overlays or shadows to colour bands.
- **Don't** use Fern (#72B01D) for text or fills; it is only for blockquote rules.
- **Don't** replace placeholders with stock or AI imagery that implies field research, participants or partners that do not exist.
