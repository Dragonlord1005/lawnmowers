import { ReactNode } from "react";
import NavBar from "./Navbar/NavBar";
import LightDark from "./LightDark/LightDark";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <NavBar />
    {children}
    {/* <LightDark /> */}
  </div>
);

export default Layout;
