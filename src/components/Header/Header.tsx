import Link from "next/link";
import Logo from "@/svg/Logo";
import s from "./header.module.css";

export default function Header() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link href="/">
          <Logo />
        </Link>
      </nav>
    </header>
  );
}
