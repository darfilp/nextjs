import Link from "next/link";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.root}>
      <p className="">Site on Nextjs</p>
      <nav className={s.nav}>
        <Link href={"./"} className={s.link}>
          Главная страница
        </Link>
        <Link href={"./posts"} className={s.link}>
          Статьи
        </Link>
      </nav>
    </header>
  );
};
