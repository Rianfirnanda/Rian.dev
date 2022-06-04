export type NavLink = {
  url: string;
  text: string;
};

export const links: NavLink[] = [
  {
    text: "Postingan",
    url: "/blog",
  },
  {
    text: "Projek",
    url: "/projects",
  },
  {
    text: "About",
    url: "/about",
  },
];
