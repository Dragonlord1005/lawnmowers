import { ReactNode, Suspense } from "react";
// import Nav from "./Nav/Nav";
import dynamic from "next/dynamic";
import { Loading } from "@nextui-org/react";

const Nav = dynamic(() => import("./Nav/Nav"), {
  // ssr: true,
  suspense: true,
});

type Props = {
  children?: ReactNode;
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
