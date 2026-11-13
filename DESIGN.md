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
  display-xl:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  display:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  display-hero:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "clamp(2rem, 3vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
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
  statement:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.15
  article-heading:
    fontFamily: "'Atkinson Hyperlegible', Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  label:
    fontFamily: "'Lexend', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.5
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

The team leads: both openings put the real group photo first, the home page full-bleed under a navy message panel and the About page as a wide framed photo. Below the opening, pages are built from full-width bands of colour (Midnight Harbour statements, Morning Sky calls to action) with plain white or Cloud bands of reading content between them. Inside those bands, white cards with gentle rounding hold discrete items such as posts, values and team members.

**Key Characteristics:**
- Full-width colour bands set the rhythm; content sits in a 72rem column with 1.5rem gutters.
- Two legibility-first typefaces: Atkinson Hyperlegible for headings, Lexend for body and UI.
- Midnight Harbour navy carries text and authority; Lagoon/Deep Lagoon teal marks action; Spring Shoot lime marks emphasis on dark ground.
- Flat colour does the layering; shadows stay faint and grow only when a clickable card is hovered.
- Sturdy, friendly components: bold labels, 44px+ targets, gentle 6–12px rounding.

## Colors

A cool water-and-leaf palette anchored by one deep navy. The navy does almost all the talking, and the teals and greens are used as signals.

### Primary
- **Midnight Harbour** (`primary`): the voice of the site. All body text, every heading, the nav wordmark, and the full-width dark bands (home hero panel, statement, compact contact block). On white or Cloud it gives very high contrast, and it is the hover colour that teal buttons settle into.

### Secondary
- **Lagoon Teal** (`accent`): the brand teal. Footer contact icons, value-card icons and the team deep-link highlight. It is too light for white text, for text on light ground, or for focus rings (2.9:1 on Cloud), so it is used only for fills and icons.
- **Deep Lagoon** (`accent-text`): the accessible teal. It is darkened from Lagoon Teal to reach at least 4.7:1 against white. Use it for every focus ring on light ground (at least 3.6:1 on all light surfaces), primary button fills, inline and "Read more" links, the active nav link, the footer tagline and the back-to-top button.

### Tertiary
- **Spring Shoot** (`surface`): the lime highlight. Topic tags, buttons and links that sit on a Midnight Harbour band, the statement's accent rule, and one of the team-photo backdrops. It always sits next to navy, never next to white text.
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
**The Two Teals Rule.** Lagoon Teal fills and decorates; Deep Lagoon carries text, focus rings and white-on-teal labels. Small text never goes in Lagoon Teal, and white text never sits on it.

**The Navy Voice Rule.** Midnight Harbour is the only text colour for headings and body copy on light ground. Hierarchy comes from size, weight and Dusk Slate, never from extra hues.

**The Lime-On-Navy Rule.** On a Midnight Harbour band, emphasis (primary buttons, rules, inline links) moves to Spring Shoot, and secondary copy may use Morning Sky.

## Typography

**Display Font:** Atkinson Hyperlegible (with Arial, sans-serif)
**Body Font:** Lexend (with Arial, sans-serif)

**Character:** Both faces exist to be read by people who find standard type hard. Atkinson's distinct letterforms give headings a steady, civic plainness, and Lexend's open spacing keeps long explanations unhurried. Only weights 400 and 700 are loaded for each face.

### Hierarchy
- **Display XL** (700, clamp 2.75–4.75rem, 1.02, −0.02em): the About page H1, the largest type on the site.
- **Display Hero** (700, clamp 2–2.75rem, 1.04, −0.02em): slide headings in the home hero carousel panel. Long post titles step down to clamp 1.625–2.125rem (`.hero-title-long`).
- **Display** (700, 3rem / 48px, 1.1): page H1s (journal, team, contact, post titles) and listing headers such as "Our Blog". Every Display heading steps down to 2.25rem below 768px.
- **Statement** (700, 2.5rem, 1.15): the centred pull-quote on a Midnight Harbour band; 1.875rem below 768px.
- **Headline** (700, 2.25rem, 1.15): section H2s (about sections, values, team groups, CTA band, the compact "Get in touch" band).
- **Article Heading** (700, 1.875rem, 1.25): in-article H2s at 768px and above; they use Title size below that. In-article H3s run 1.25–1.5rem.
- **Title** (700, 1.5rem, 1.25): card titles, team names and values cards.
- **Body Long** (400, 1.125rem, 1.625): blog post bodies (max 65ch), split-section copy, card summaries and hero sublines.
- **Body** (400, 1rem, 1.5): UI text, meta lines, footer links.
- **Label** (700, 0.875rem, 1.5): topic tags, form labels and button-adjacent UI text. Always sentence case, with no tracked capitals.

### Named Rules
**The Bold Heading Rule.** Every Atkinson heading is weight 700 with −0.01em tracking (−0.02em at the two hero display sizes) and `text-wrap: balance`. The base heading rule in `styles.css` is written as `body :is(h1, h2, h3, h4)` so that Tailwind's CDN preflight, which loads after it, cannot reset the weight. Keep that selector.

**The Heading Speaks Alone Rule.** Headings carry their sections with no tracked-caps label above them. If a section needs context, put it in the heading or the first sentence.

**The Two-Weight Rule.** Use only 400 and 700, the only weights loaded for each face.

Body paragraphs and list items use `text-wrap: pretty` to avoid one-word last lines.

## Layout

Pages stack full-width bands. Each band contains a centred column of max 72rem (Tailwind `max-w-6xl`) with 1.5rem side gutters. Blog posts narrow to a 48rem column (`max-w-3xl`), and their body text caps at 65ch.

- **Section rhythm:** standard bands use 4rem vertical padding, rising to 5rem at 640px and above. About-page sections use 4rem on phones and 6rem from 1024px. Compact bands such as the home contact block use 2rem. Page `main` areas open with 6rem top padding.
- **Split sections:** one column on mobile; two equal columns with a 3rem gap at 768px and above, vertically centred. `.split-reverse` swaps the image to the other side on alternate rows.
- **Card grids:** a 2rem gap. Blog cards: one column, two at 768px. Value cards: one, two (640px) and four (1024px) columns. Team: two columns from the smallest phones (1rem gap, compact 1.125rem names), 2rem gap and full-size names from 640px, three columns at 1024px, four at 1280px.
- **Same-ground sections:** consecutive `.about-section` bands on the same ground share one interval (`--section-space-lg`: 4rem on phones, 6rem from 1024px) instead of stacking two.
- **Ruled row:** "What we do" sits in an open four-up row, each item under a 2px Midnight Harbour rule with no card. It is intentionally different from the values cards above it, so the two lists don't read as one repeated grid.
- **Bands share the column:** every band's content, including centred-box bands like the CTA, starts on the same 72rem / 1.5rem-gutter edge as the nav and footer.
- **Home hero (carousel):** one rounded frame (1rem radius) in the content column, lined up with the nav logo and links, with the photo at 16:9 at every size. From 1024px the navy panel (max 38rem, 0.75rem radius) and the controls pill sit inside the photo's bottom corners, 1rem in, on a shared baseline. Nothing hangs outside the frame, and the whole hero fits the first screen at 1366×768. Below 1024px the frame becomes one card: photo on top, navy band joined underneath, filled to the tallest slide. On tablets the buttons sit at the band's foot level with the controls on the right; on phones the buttons follow the text and the controls sit at the foot. All slides share one grid cell, so the hero never jumps.
- **About hero:** Cloud ground. Headline and intro sit side by side from 1024px (7fr / 5fr, bottom-aligned), with the team photo underneath at 21:9 (4:3 on phones), 3.5rem below.
- **Subteam rows (About, "who we are"):** one row per subteam, separated by Mist Line hairlines, photo and names at 7fr / 5fr from 900px, alternating sides. Names and roles are a two-column list that stacks below 480px.
- **Breakpoints:** 640px (sm), 768px (md; the nav switches to a hamburger below 768px), 1024px (lg).
- **Sticky nav:** 4rem tall. Anchor targets use `scroll-margin-top: 4rem` so headings clear it.

## Elevation & Depth

Depth comes from flat colour. Full-width bands in Midnight Harbour, Lagoon Teal and Morning Sky separate the page into layers, and nothing floats above them. Shadows are faint, navy-tinted and functional: a whisper at rest marks a card's edge on Cloud ground, and a softer, larger shadow plus a 0.25rem rise appears only when a card can be clicked.

### Shadow Vocabulary
- **Card rest** (`box-shadow: 0 1px 3px rgb(17 34 80 / 8%)`): every card and team card at rest. Static cards stay here even on hover.
- **Card lift** (`box-shadow: 0 10px 25px rgb(17 34 80 / 12%)` + `translateY(-0.25rem)`): hover state of clickable cards only.
- **Field focus halo** (`box-shadow: 0 0 0 3px var(--focus-ring)`): boxed form controls on a navy band; the ring is Spring Shoot there.
- **Dialog scrim** (`rgb(17 34 80 / 65%)`): the backdrop behind the team-member dialog.

### Named Rules
**The Lift Means Click Rule.** A card rises only if the whole card is a link or button. Static information cards (values, "what we do", "coming soon") stay flat at rest shadow.

**The Flat Band Rule.** Coloured bands never carry shadows, gradients or overlays. A change of colour is the separation. The home hero panel follows it too: a solid navy block inside the photo frame with no shadow, so text never sits on the photo directly.

## Shapes

Gentle, consistent rounding that reads as friendly without becoming bubbly. Cards, images, dialogs and photo frames use 0.75rem. Buttons and inline imagery inside cards use 0.5rem. Boxed inputs use 0.375rem. The team dialog's close button is a 44px white circle. Topic tags and the contact "Send message" button are full pills. Underline-style form fields on the contact page are square, with only a 2px navy baseline that thickens to a 3px focus-ring line on focus. One deliberate asymmetry exists: the contact-page photo uses `0.5rem 2.5rem 0.5rem 0.5rem`, so one corner is larger, like a peeled label. Borders are rare: hairline Mist Line dividers, a 2px current-colour outline on outline buttons, and a 0.25rem Fern rule on blockquotes.

## Components

### Buttons
Sturdy and friendly. Bold Lexend labels, obvious fills, and colour that shifts on hover with no change in size.
- **Shape:** gently curved (0.5rem); pill variant fully rounded.
- **Primary:** Deep Lagoon fill, white 700 label, 0.75rem × 1.25rem padding. Hover settles to Midnight Harbour (0.2s ease).
- **On dark (home hero panel):** Spring Shoot fill with Midnight Harbour label; hover to white.
- **On Morning Sky (CTA band):** Midnight Harbour fill with white label; hover to Deep Lagoon.
- **Outline:** transparent with a 2px current-colour border, inheriting the band's text colour. Hover fills with the opposite colour (white on navy, navy on sky).
- **Pill:** Midnight Harbour fill, min-height 2.75rem, full radius, used to submit forms. In the compact contact block it becomes Spring Shoot with a navy label, aligned right.
- **Focus:** 3px outline in `--focus-ring`, offset 3px, on every interactive element. The ring is Deep Lagoon on light ground and Spring Shoot on Midnight Harbour bands (`.hero`, `.statement`, `.contact--compact` reset the variable).
- **Pending:** submit buttons disable and read "Sending…" while the form hands off (`.btn:disabled`: 0.75 opacity, progress cursor).

### Chips
- **Photo chip:** Midnight Harbour pill caption over a photo corner, white 0.875rem bold label, led by the logo's three sound strokes drawn in Spring Shoot. Used as the About team-photo caption.
- **Topic tag:** Spring Shoot pill, Midnight Harbour 0.875rem bold label, 0.25rem × 0.75rem padding. Each card has one tag, naming the post category ("Basics", "Industry").

### Cards / Containers
- **Corner Style:** 0.75rem.
- **Background:** Pure White on Cloud ground.
- **Shadow Strategy:** card rest; card lift on hover only when clickable (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** 1.5rem. Blog cards contain a 16:9 image (0.5rem radius), a tag, a title link whose `::after` stretches over the whole card, a Body Long summary, and an underlined Deep Lagoon "Read more →".
- **Coming soon:** same card with a Morning Sky 16:9 block, Slate text, no lift, default cursor.
- **Focus:** `:focus-within` draws a 2px focus-ring outline around the whole card.

### Inputs / Fields
- **Underline (contact page):** transparent, no box, 2px Midnight Harbour baseline, min-height 2.75rem. On focus the baseline becomes a 3px Deep Lagoon line.
- **Boxed on dark (compact contact):** white fill, 0.375rem radius, 0.75rem padding, white label text. On focus: a 1px border plus a 3px halo, both Spring Shoot.
- **Labels:** Atkinson 0.875rem bold in Midnight Harbour. "(required)" sits in regular Lexend in Dusk Slate.

### Navigation
- **Bar:** sticky, 4rem, Cloud fill, Mist Line hairline beneath. Atkinson wordmark "PrintSpeak" on the left in Midnight Harbour (hover Deep Lagoon); links on the right in Lexend 0.875rem, with a 1.75rem gap.
- **States:** hover and `aria-current="page"` both turn the link Deep Lagoon.
- **Mobile (< 768px):** 44px hamburger whose lines morph into an ×. The panel drops down full-width with 1rem-padded rows, fading and sliding 0.5rem over 0.18s. With reduced motion there is no transition.

### Footer
Cloud ground with a Midnight Harbour top rule. Wordmark, Deep Lagoon tagline, short about line and location on the left. Columns for pages and recent posts sit on the right. A bottom bar holds the copyright, social icons and a small square Deep Lagoon back-to-top button.

### Colour Band Sections (signature)
The site's signature unit is a full-width band of a single brand colour carrying one message:
- **Home hero carousel:** five slides (team, two blog posts, two subteams), each a photo plus a Midnight Harbour panel with an H2 and only the copy it needs: slide 1 carries the subline and two buttons, the rest a single Spring Shoot button. The page H1 is visually hidden above the carousel.
- **Statement band:** Midnight Harbour, centred, a 4rem × 0.25rem Spring Shoot rule above a bold pull-quote.
- **CTA band:** Morning Sky, a navy headline and a pair of buttons.
- **Compact contact band:** Midnight Harbour, heading and intro on the left, boxed form on the right from 1024px.

### Hero Carousel
Script: `js/hero-carousel.js`. Markup: `index.html #hero`. Tests: `tests/e2e/hero-carousel.spec.js`.
- **Faces stay clear.** Every slide image carries `data-protect` (face or subject boxes as `x y w h` percentages of the original photo) and a `--hero-pos` object-position. The test maps the boxes through `object-fit: cover` at seven screen sizes from 1920×1080 to 390×844 and fails if the panel or the controls touch one, if either leaves the frame, or if the frame runs past the first screen at 1024px and wider. Slide 1 is the tightest: the front-left face ends at about 53% of the photo's height, which is why the desktop panel is compact. When a photo changes, update both attributes and run the tests.
- **Controls:** a white pill (focus ring drawn inside each button): previous, dots, next, pause/play (44px buttons; dots are 24px targets). The current dot stretches into a bar that fills over the 7s interval (`--hero-interval`); that fill animation is the timer.
- **Motion:** slides cross-fade over 0.7s with an exponential ease-out. Rotation holds on mouse hover, on keyboard focus inside the hero and in a hidden tab; the pause button stops it until Play is pressed. With reduced motion there is no autoplay and no fade.
- **Accessibility:** `aria-roledescription` carousel/slide, slides labelled "N of 5", inactive slides `inert`, the slide region announces politely only while stopped. Without JavaScript the first slide shows and the controls stay hidden.

### Team Card & Dialog
White card with a square photo frame (0.75rem radius) whose backdrop rotates through Spring Shoot, Morning Sky and Cloud. If the photo is missing, the frame shows the member's initials in large Atkinson 3rem bold. Clicking opens a 40rem dialog with a navy scrim, scaling in from 96% over 0.2s, with the photo and bio side by side from 640px. Deep links pulse a 4px Lagoon Teal ring on arrival.

## Do's and Don'ts

### Do:
- **Do** take every colour from the `--brand-*` custom properties in `styles.css` (exposed to Tailwind as `primary`, `accent`, `accent-text`, `highlight`, `surface`, `secondary`, `neutral-bg`, `ink`), never from hard-coded hex values.
- **Do** use Deep Lagoon (#0A7C87) for any teal text or any teal fill behind white text; keep Lagoon Teal (#0FA3B1) for large fills, outlines and icons.
- **Do** let headings inherit 700 from the shared `body :is(h1…h4)` rule.
- **Do** draw every focus outline from `var(--focus-ring)` (3px, 3px offset), and reset that variable to Spring Shoot on any new navy band. Give every target at least 2.75rem (44px).
- **Do** wrap every transform or animation in `prefers-reduced-motion` handling, as the existing nav, cards and dialog already do.
- **Do** use the web copies in `img/team_imgs/web/` (with `srcset`) for group photos, never the multi-megabyte originals.
- **Do** mark missing photography with the Morning Sky placeholder (icon plus "… coming soon", `role="img"` with a label) until the real image exists.
- **Do** build new sections as single-colour bands with one message, alternating with white or Cloud reading bands.

### Don't:
- **Don't** put white or small text on Lagoon Teal, Lagoon Teal text on white, or a Lagoon Teal focus ring on light ground; all fail WCAG AA.
- **Don't** introduce weights other than 400 and 700, or a third typeface.
- **Don't** put a small uppercase "eyebrow" label above a heading.
- **Don't** make static cards lift on hover; the rise means "this is clickable".
- **Don't** add gradients, overlays or shadows to colour bands.
- **Don't** use Fern (#72B01D) for text or fills; it is only for blockquote rules.
- **Don't** replace placeholders with stock or AI imagery that implies field research, participants or partners that do not exist.
