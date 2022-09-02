import { ReactNode } from "react";
import NavBar from "./Navbar/NavBar"

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <NavBar/>
    {children}
  </div>
);

export default Layout;
