import Link from "next/link";
import style from "../styles/Header.module.css";

function Header() {
  return (
    <div className={style.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contact">
        <a>Contact Me</a>
      </Link>
    </div>
  );
}

export default Header;
