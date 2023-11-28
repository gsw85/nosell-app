export const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
export const navigationInit = [
  { name: "Home", href: "/", current: true },
  { name: "How It Works", href: "/how", current: false },
  { name: "FAQ", href: "/faq", current: false },
];
export const userNavigation = [
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export function reMenu(navigation, pathname) {
  function isActive(href) {
    let isCurrent;

    if (href === "/") {
      isCurrent = pathname === href;
    } else {
      isCurrent = pathname.startsWith(href);
    }
    return isCurrent;
  }

  return navigation.map((i) => ({ ...i, current: isActive(i.href) }));
}
