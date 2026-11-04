// EDIT NAV LINKS HERE: affects every page
const navLinks = [
  { page: "home", label: "Home", file: "index.html" },
  { page: "about", label: "About", file: "about.html" },
  { page: "team", label: "Team", file: "team.html" },
  { page: "blog", label: "Blog", file: "blog.html" },
  { page: "contact", label: "Contact", file: "contact.html" }
];

const createNavMarkup = (pathPrefix) => `
  <nav id="top" class="site-nav" aria-label="Primary">
    <div class="site-nav-container">
      <a href="${pathPrefix}index.html" class="site-nav-logo">PrintSpeak</a>
      <div class="site-nav-links">
        ${navLinks.map(({ page, label, file }) => `
          <a class="site-nav-link" data-page="${page}" href="${pathPrefix}${file}">${label}</a>
        `).join("")}
      </div>
    </div>
  </nav>
`;

// EDIT FOOTER HERE: affects every page
const FOOTER = {
  brandName: "PrintSpeak",

  // Brand content
  tagline: "Where Print Comes Alive",
  about: "PrintSpeak brings printed materials to life with accessible talking labels.",

  // Column headings
  headings: {
    pages: "Pages",
    blog: "Blog",
    contact: "Contact"
  },

  // Contact details
  // Brand email (footer, contact page, form destination): js/site-nav.js FOOTER.email.
  email: "official.printspeak@gmail.com",
  location: "Toronto, ON",
  projectLine: "A GCM 375 student project, Toronto Metropolitan University",

  // Blog content
  latestPosts: [
    { title: "Making Accessibility Standard Practice: Why Aren't Talking Labels on Every Product?", href: "blog/accessibility-standard-practice.html", date: "" },
    { title: "What Are Talking Labels?", href: "blog/talking-labels.html", date: "" }
  ],

  // Editing map: Social links (footer + contact panels): js/site-nav.js FOOTER.socials.
  // Icons: SOCIAL_ICONS in this file.
  socials: [
    { label: "Instagram", handle: "@printspeak_gcm375", href: "https://www.instagram.com/printspeak_gcm375/", icon: "instagram" },
    { label: "LinkedIn", handle: "PrintSpeak", href: "https://www.linkedin.com/in/print-speak-676414446/", icon: "linkedin" }
  ],

  // Bottom bar
  copyright: "All rights reserved.",
  backToTopLabel: "Back to top"
};

// EDIT CONTACT SECTION HERE: affects contact.html and index.html
// Editing map: Contact section (both pages): js/site-nav.js CONTACT object + FOOTER email/location/socials.
// Compact copy: CONTACT.compactIntro. Layout: styles.css /* === CONTACT === */.
// Variants: data-variant="full" on contact.html and data-variant="compact" on index.html.
const CONTACT = {
  heading: "Contact Us",
  intro: "",
  compactIntro: "Questions, ideas, or partnerships? We'd love to hear from you.",
  image: "",
  imageAlt: ""
};

const SOCIAL_ICONS = {
  instagram: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke-width="2" />
      <circle cx="12" cy="12" r="4" stroke-width="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.5 9h3.4v11.5H3.5V9Zm5.5 0h3.2v1.6h.1c.4-.8 1.5-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7v6.2H17v-5.5c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.6H9V9Z" />
    </svg>
  `
};

const createSocialIconMarkup = (icon, className) => {
  const iconMarkup = SOCIAL_ICONS[icon];
  return iconMarkup.replace("<svg ", `<svg class="${className}" `);
};

const createEmailTextMarkup = () => {
  return FOOTER.email;
};

const createFooterBrandMarkup = (pathPrefix) => `
  <div class="site-footer-column site-footer-brand">
    <a href="${pathPrefix}index.html" class="site-footer-logo">${FOOTER.brandName}</a>
    ${FOOTER.tagline ? `<p class="site-footer-tagline">${FOOTER.tagline}</p>` : ""}
    ${FOOTER.about ? `<p class="site-footer-about">${FOOTER.about}</p>` : ""}
    ${FOOTER.location ? `
      <p class="site-footer-contact-line">
        <svg class="site-footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" stroke-width="2" />
        </svg>
        <span>${FOOTER.location}</span>
      </p>
    ` : ""}
    ${FOOTER.projectLine ? `<p class="site-footer-project">${FOOTER.projectLine}</p>` : ""}
  </div>
`;

const createFooterPagesMarkup = (pathPrefix) => `
  <div class="site-footer-column">
    <h2 class="site-footer-heading">${FOOTER.headings.pages}</h2>
    <nav class="site-footer-links" aria-label="Footer">
      ${navLinks.map(({ label, file }) => `
        <a class="site-footer-link" href="${pathPrefix}${file}">${label}</a>
      `).join("")}
    </nav>
  </div>
`;

const createFooterBlogMarkup = (pathPrefix) => `
  <div class="site-footer-column">
    <h2 class="site-footer-heading">${FOOTER.headings.blog}</h2>
    <div class="site-footer-posts">
      ${FOOTER.latestPosts.map(({ title, href, date }) => `
        <article class="site-footer-post">
          ${date ? `<p class="site-footer-date">${date}</p>` : ""}
          <a class="site-footer-link" href="${pathPrefix}${href}">${title}</a>
        </article>
      `).join("")}
    </div>
  </div>
`;

const createFooterContactMarkup = () => `
  <div class="site-footer-column">
    <h2 class="site-footer-heading">${FOOTER.headings.contact}</h2>
    <div class="site-footer-contact">
      ${FOOTER.email ? `
        <a class="site-footer-link site-footer-contact-line email-link" href="mailto:${FOOTER.email}">
          <svg class="site-footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18v14H3z M3 5l9 7 9-7" />
          </svg>
          <span>${createEmailTextMarkup()}</span>
        </a>
      ` : ""}
    </div>
  </div>
`;

const createFooterSocialsMarkup = () => FOOTER.socials.length ? `
  <div class="site-footer-socials">
    ${FOOTER.socials.map(({ label, href, icon }) => `
      <a class="site-footer-social" href="${href}" aria-label="PrintSpeak on ${label}" target="_blank" rel="noopener">
        ${createSocialIconMarkup(icon, "site-footer-social-icon")}
      </a>
    `).join("")}
  </div>
` : "";

const createContactFormMarkup = (variant) => {
  const fields = variant === "compact"
    ? [
      { id: "email", label: "Email", type: "email" },
      { id: "message", label: "Message", type: "textarea", rows: 3 }
    ]
    : [
      { id: "name", label: "Name", type: "text" },
      { id: "email", label: "Email", type: "email" },
      { id: "message", label: "Message", type: "textarea", rows: 4 }
    ];

  return `
  <form class="contact-form" method="POST" data-site-form="${variant}">
    <input type="hidden" name="_subject" value="New message from printspeak.ca" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="" />
    <input class="visually-hidden" type="text" name="_honey" tabindex="-1" autocomplete="off" />
    ${fields.map(({ id, label, type, rows }) => `
      <div class="contact-field">
        <label for="${variant}-${id}">${label} <span>(required)</span></label>
        ${type === "textarea"
          ? `<textarea id="${variant}-${id}" name="${id}" rows="${rows}" class="form-input" required></textarea>`
          : `<input id="${variant}-${id}" name="${id}" type="${type}" class="form-input" required />`}
      </div>
    `).join("")}
    <button type="submit" class="btn btn-pill">Send message</button>
  </form>
  `;
};

const createContactMarkup = (contactElement) => {
  const headingLevel = contactElement.dataset.headingLevel === "1" ? "h1" : "h2";
  const variant = contactElement.dataset.variant === "compact" ? "compact" : "full";
  contactElement.classList.add(`contact--${variant}`);
  const imageMarkup = CONTACT.image
    ? `<img class="contact-image" src="${CONTACT.image}" alt="${CONTACT.imageAlt}" />`
    : `
      <div class="img-placeholder contact-image" role="img" aria-label="Photo coming soon">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 5h16v14H4zM8 9h.01M4 16l4-4 3 3 2-2 7 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
        </svg>
        <span>Photo coming soon</span>
      </div>
    `;

  const detailsMarkup = `
    <div class="contact-details">
      <div class="contact-detail">
        <h3>Email</h3>
        <a class="email-link" data-site-email href="mailto:"><span data-site-email-text></span></a>
      </div>
      <div class="contact-detail">
        <h3>Based in</h3>
        <p>${FOOTER.location}</p>
      </div>
      <div class="contact-socials">
        ${FOOTER.socials.map(({ label, href, icon }) => `
          <a href="${href}" aria-label="PrintSpeak on ${label}" target="_blank" rel="noopener">
            ${createSocialIconMarkup(icon, "contact-social-icon")}
          </a>
        `).join("")}
      </div>
    </div>
  `;

  if (variant === "compact") {
    return `
      <div class="contact-content contact--compact">
        <div class="contact-copy-column">
          <${headingLevel} id="contact-heading">Get in touch</${headingLevel}>
          <p class="contact-intro">${CONTACT.compactIntro}</p>
          <a class="contact-page-link" href="${pathPrefix}contact.html">More ways to reach us →</a>
        </div>
        <div class="contact-form-column">
          <p class="form-status" data-form-status role="status" hidden>Thanks! Your message has been sent.</p>
          ${createContactFormMarkup(variant)}
        </div>
      </div>
    `;
  }

  return `
    <div class="contact-content contact--full">
      <div class="contact-image-wrap">${imageMarkup}</div>
      <div class="contact-form-column">
        <${headingLevel} id="contact-heading">${CONTACT.heading}</${headingLevel}>
        ${CONTACT.intro ? `<p class="contact-intro">${CONTACT.intro}</p>` : ""}
        <p class="form-status" data-form-status role="status" hidden>Thanks! Your message has been sent.</p>
        ${createContactFormMarkup(variant)}
      </div>
      ${detailsMarkup}
    </div>
  `;
};

const createFooterMarkup = (pathPrefix) => `
  <div class="site-footer-container">
    <div class="site-footer-main">
      ${createFooterBrandMarkup(pathPrefix)}
      <div class="site-footer-columns">
        ${createFooterPagesMarkup(pathPrefix)}
        ${createFooterBlogMarkup(pathPrefix)}
        ${createFooterContactMarkup()}
      </div>
    </div>
    <div class="site-footer-bottom">
      <p class="site-footer-copyright">© ${new Date().getFullYear()} ${FOOTER.brandName}. ${FOOTER.copyright}</p>
      <div class="site-footer-bottom-actions">
        ${createFooterSocialsMarkup()}
        <a class="site-footer-back-to-top" href="#top" aria-label="${FOOTER.backToTopLabel}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15 6-6 6 6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
`;

const isBlogPost = window.location.pathname.includes("/blog/");
const pathPrefix = isBlogPost ? "../" : "./";
const currentFile = window.location.pathname.split("/").pop() || "index.html";
const pageName = isBlogPost || currentFile === "blog.html"
  ? "blog"
  : currentFile === "index.html"
    ? "home"
    : currentFile.replace(".html", "");

const nav = document.getElementById("site-nav");
if (nav) {
  nav.innerHTML = createNavMarkup(pathPrefix);
  const currentLink = nav.querySelector(`[data-page="${pageName}"]`);
  if (currentLink) {
    currentLink.setAttribute("aria-current", "page");
  }
}

const footer = document.getElementById("site-footer");
if (footer) {
  footer.innerHTML = createFooterMarkup(pathPrefix);
}

document.querySelectorAll("[data-site-contact]").forEach((contactElement) => {
  contactElement.innerHTML = createContactMarkup(contactElement);
});

window.SITE_EMAIL = FOOTER.email;

// CONTACT: fills email links and form action from FOOTER.
document.querySelectorAll("[data-site-email]").forEach((emailElement) => {
  emailElement.href = `mailto:${FOOTER.email}`;
  const emailText = emailElement.querySelector("[data-site-email-text]");
  if (emailText) {
    emailText.innerHTML = createEmailTextMarkup();
  }
});

document.querySelectorAll("[data-site-form]").forEach((form) => {
  form.action = `https://formsubmit.co/${FOOTER.email}`;

  const nextUrl = form.dataset.siteForm === "compact"
    ? new URL("./index.html?sent=1#contact", window.location.href)
    : new URL("./contact.html?sent=1", window.location.href);
  const nextField = form.querySelector('[name="_next"]');
  if (nextField) {
    nextField.value = nextUrl.href;
  }
});

const formStatus = document.querySelector("[data-form-status]");
if (formStatus && new URLSearchParams(window.location.search).get("sent") === "1") {
  formStatus.hidden = false;
}
