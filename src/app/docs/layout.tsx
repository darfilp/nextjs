import Link from "next/link";
import s from "./DocsLayout.module.css";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="">
        <div className="">Документация на других языках:</div>
        <div className={s.header}>
          <Link href={"/docs?lang=en"}>Английский</Link>
          <Link href={"/docs?lang=ch"}>Китайский</Link>
        </div>
      </div>
      {children}
    </div>
  );
}
