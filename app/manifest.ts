import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UNLEASHWORKS - Leadership Change Culture",
    short_name: "UNLEASHWORKS",
    description:
      "Leadership, change and culture practice by Nuzhath Ayaz. Unleash your potential.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1F44",
    theme_color: "#0A1F44",
    icons: [
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/logo.jpeg", sizes: "1600x800", type: "image/jpeg" },
    ],
  };
}
