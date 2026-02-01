// app/lib/gtag.js

export const GA_MEASUREMENT_ID = "G-KZQFTXMEDC";

// Pageview
export const pageview = (url) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  const isDebug =
    window.location.search.includes("debug=1") ||
    window.location.hostname.includes("localhost");

  window.gtag("event", "page_view", {
    page_location: url,
    page_path: window.location.pathname,
    page_title: document.title,
    debug_mode: isDebug,
  });
};

// Event
export const event = ({ action, category, label, value }) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  const isDebug =
    window.location.search.includes("debug=1") ||
    window.location.hostname.includes("localhost");

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    debug_mode: isDebug,
  });
};
