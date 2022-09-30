import { Suspense } from "preact/compat";
import { ComponentChildren } from "preact";
// import Nav from "./Nav/Nav";
import dynamic from "next/dynamic";
import { Loading } from "@nextui-org/react";

const Nav = dynamic(() => import("./Nav/Nav"), {
  ssr: false
});

type Props = {
  children?: ComponentChildren;
};

const Layout = ({ children }: Props) => (
  <div>
    <Suspense fallback={<Loading />}>
      <Nav />
    </Suspense>
    {children}
  </div>
);

export default Layout;
