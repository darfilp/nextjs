"use client";

import Link from "next/link";
import s from "./Header.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Header = () => {
  const pathname = usePathname();

  console.log(pathname, "pathname");
  const links = [
    { text: "Главная страница", href: "/" },
    { text: "Статьи", href: "/posts" },
    { text: "Документация", href: "/docs?lang=en" },
  ];

  return (
    <header className={s.root}>
      <p className="">Site on Nextjs</p>
      <nav className={s.nav}>
        {links.map((link) => {
          console.log(pathname, link.href);
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={link.text}
              className={clsx(s.link, isActive && s["link-active"])}
              href={link.href}
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
