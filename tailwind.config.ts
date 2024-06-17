import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-heropatterns")({
      variants: [],
      patterns: [
        "anchors-away",
        "architect",
        "autumn",
        "aztec",
        "bamboo",
        "bank-note",
        "bathroom-floor",
        "bevel-circle",
        "boxes",
        "brick-wall",
        "bubbles",
        "cage",
        "charlie-brown",
        "church-on-sunday",
        "circles-squares",
        "circuit-board",
        "connections",
        "cork-screw",
        "current",
        "curtain",
        "cutout",
        "death-star",
        "diagonal-lines",
        "diagonal-stripes",
        "dominos",
        "endless-clouds",
        "eyes",
        "falling-triangles",
        "fancy-rectangles",
        "flipped-diamonds",
        "floating-cogs",
        "floor-tile",
        "formal-invitation",
        "four-point-stars",
        "glamorous",
        "graph-paper",
        "groovy",
        "happy-intersection",
        "heavy-rain",
        "hexagons",
        "hideout",
        "houndstooth",
        "i-like-food",
        "intersecting-circles",
        "jigsaw",
        "jupiter",
        "kiwi",
        "leaf",
        "lines-in-motion",
        "lips",
        "lisbon",
        "melt",
        "moroccan",
        "morphing-diamonds",
        "overcast",
        "overlapping-circles",
        "overlapping-diamonds",
        "overlapping-hexagons",
        "parkay-floor",
        "piano-man",
        "pie-factory",
        "pixel-dots",
        "plus",
        "polka-dots",
        "rails",
        "rain",
        "random-shapes",
        "rounded-plus-connected",
        "signal",
        "skulls",
        "slanted-stars",
        "squares",
        "squares-in-squares",
        "stamp-collection",
        "steel-beams",
        "stripes",
        "temple",
        "texture",
        "tic-tac-toe",
        "tiny-checkers",
        "topography",
        "volcano-lamp",
        "wallpaper",
        "wiggle",
        "x-equals",
        "yyy",
        "zig-zag",
      ],
      colors: {
        default: "hsl(var(--primary))",
        "blue-dark": "#000044",
      },
      opacity: {
        default: "0.05",
        "100": "1.0",
      },
    }),
  ],
} satisfies Config;

export default config;
