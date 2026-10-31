import { useEffect } from "react";

export const SITE_URL = "https://suryajayapromosindo.com";
const DEFAULT_IMAGE = "/assets/images/catalog-posters/pulpen-catalog-v2.webp";

function absoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector("meta[" + attribute + '="' + key + '"]');

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export default function SeoMetadata({ title, description, path = "/", image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index,follow");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "id_ID");
    upsertMeta("property", "og:site_name", "Surya Jaya Promosindo");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertCanonical(url);
  }, [description, image, path, title]);

  return null;
}
