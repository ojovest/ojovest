export const GA_ID = "G-KZQFTXMEDC";

export function gaEvent({ action, category, label, value }) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } else {
    // fallback (still safe)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
      value,
    });
  }
}
