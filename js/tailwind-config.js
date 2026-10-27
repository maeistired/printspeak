window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "var(--brand-primary)",
        accent: "var(--brand-accent)",
        "neutral-bg": "var(--brand-neutral-bg)",
        highlight: "var(--brand-highlight)",
        surface: "var(--brand-surface)",
        secondary: "var(--brand-secondary)",
        ink: "var(--brand-text)"
      },
      fontFamily: {
        heading: "var(--brand-font-heading)",
        body: "var(--brand-font-body)"
      }
    }
  }
};
