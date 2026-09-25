export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  {
    label: "Packages",
    href: "/packages",
    hasChevron: true,
    children: [{ label: "Gallery", href: "/packages/gallery" }],
  },
  { label: "Visa", href: "/visa" },
  { label: "Contact us", href: "/contact" },
];

export const services = [
  ["01", "Airline reservations", "International ticketing made simple."],
  ["02", "Tailored tours", "All-inclusive journeys, made yours."],
  ["03", "Hotels & stays", "A comfortable welcome, anywhere."],
  ["04", "Car rental", "Freedom to explore at your pace."],
  ["05", "Visa assistance", "Friendly guidance from start to finish."],
  ["06", "Travel insurance", "Go confidently, wherever you go."],
] as const;