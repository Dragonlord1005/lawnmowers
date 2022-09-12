import { ReactNode } from "react";
import Nav from "./Nav/Nav";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Nav />
    {children}
  </div>
);

export default Layout;
