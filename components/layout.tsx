import { ReactNode } from "react";
import dynamic from "next/dynamic";

// const Navbar = dynamic(() => import("./Navbar/Navbar"));

type Props = {
  children?: ReactNode;
};

const links = [
  { link: "/", label: "Home" },
  { link: "/pricing", label: "Pricing" },
  { link: "/contact", label: "Contact" },
  { link: "/terms", label: "Terms" },
];

const Layout = ({ children }: Props) => (
  <div>
    {/* <Navbar links={links} /> */}
    {children}
  </div>
);

export default Layout;
