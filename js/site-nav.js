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
    { title: "What Are Talking Labels?", href: "blog/talking-labels.html", date: "" }
  ],

  // Social links
  socials: [],

  // Bottom bar
  copyright: "All rights reserved.",
  backToTopLabel: "Back to top"
};

const createFooterBrandMarkup = (pathPrefix) => `
  <div class="site-footer-column site-footer-brand">
    <a href="${pathPrefix}index.html" class="site-footer-logo">${FOOTER.brandName}</a>
    ${FOOTER.tagline ? `<p class="site-footer-tagline">${FOOTER.tagline}</p>` : ""}
    ${FOOTER.about ? `<p class="site-footer-about">${FOOTER.about}</p>` : ""}
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
        <a class="site-footer-link site-footer-contact-line" href="mailto:${FOOTER.email}">
          <svg class="site-footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18v14H3z M3 5l9 7 9-7" />
          </svg>
          <span>${FOOTER.email}</span>
        </a>
      ` : ""}
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
  </div>
`;

const createFooterSocialsMarkup = () => FOOTER.socials.length ? `
  <div class="site-footer-socials">
    ${FOOTER.socials.map(({ label, href }) => `
      <a class="site-footer-social" href="${href}" aria-label="${label}" target="_blank" rel="noopener">
        <span aria-hidden="true">${label.slice(0, 1)}</span>
      </a>
    `).join("")}
  </div>
` : "";

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

window.SITE_EMAIL = FOOTER.email;

// CONTACT: fills email links and form action from FOOTER.email.
document.querySelectorAll("[data-site-email]").forEach((emailElement) => {
  emailElement.href = `mailto:${FOOTER.email}`;
  const emailText = emailElement.querySelector("[data-site-email-text]");
  if (emailText) {
    emailText.textContent = FOOTER.email;
  }
});

document.querySelectorAll("[data-site-form]").forEach((form) => {
  form.action = `https://formsubmit.co/${FOOTER.email}`;

  const nextUrl = new URL("./contact.html?sent=1", window.location.href);
  const nextField = form.querySelector('[name="_next"]');
  if (nextField) {
    nextField.value = nextUrl.href;
  }
});

const formStatus = document.querySelector("[data-form-status]");
if (formStatus && new URLSearchParams(window.location.search).get("sent") === "1") {
  formStatus.hidden = false;
}
