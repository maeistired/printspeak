// EDIT NAV LINKS HERE: affects every page
const createNavMarkup = (pathPrefix) => `
  <nav class="site-nav" aria-label="Primary">
    <div class="site-nav-container">
      <a href="${pathPrefix}index.html" class="site-nav-logo">PrintSpeak</a>
      <div class="site-nav-links">
        <a class="site-nav-link" data-page="home" href="${pathPrefix}index.html">Home</a>
        <a class="site-nav-link" data-page="about" href="${pathPrefix}about.html">About</a>
        <a class="site-nav-link" data-page="team" href="${pathPrefix}team.html">Team</a>
        <a class="site-nav-link" data-page="blog" href="${pathPrefix}blog.html">Blog</a>
        <a class="site-nav-link" data-page="contact" href="${pathPrefix}contact.html">Contact</a>
      </div>
    </div>
  </nav>
`;

// EDIT FOOTER HERE: affects every page
const createFooterMarkup = () => `
  <div class="site-footer-container">
    <p>© 2026 PrintSpeak</p>
    <p>Built with HTML, CSS and Tailwind</p>
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
  footer.innerHTML = createFooterMarkup();
}
