import Image from "next/image";
import "@/scss/components/header/header.scss";
import "@/scss/components/header/header-media.scss";
import logo from "@/assets/logo-full.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Image src={logo} alt="logo" className="logo" />
        <Link className="login-signup-button" href="/register">
          Log in / Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
