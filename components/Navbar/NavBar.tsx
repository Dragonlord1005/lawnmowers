import { Navbar, Link } from "@nextui-org/react";
import NextLink from "next/link";
import LightDark from "../LightDark/LightDark";

export default function NavBar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Terms",
      href: "/terms",
    },
  ];
  return (
    <Navbar isBordered variant={"floating"}>
      {/* <Navbar.Toggle showIn="xs" autoFocus /> */}
      <Navbar.Content hideIn="xs">
        <NextLink href="/">
          <Navbar.Link>Home</Navbar.Link>
        </NextLink>
        <NextLink href="/pricing">
          <Navbar.Link>Pricing</Navbar.Link>
        </NextLink>
        <NextLink href="/contact">
          <Navbar.Link>Contact</Navbar.Link>
        </NextLink>
        <NextLink href="/terms">
          <Navbar.Link>Terms</Navbar.Link>
        </NextLink>
      </Navbar.Content>
      {/* <Navbar.Collapse>
        {links.map((link) => (
          <NextLink href={link.href} key={link.name}>
            <Link>{link.name}</Link>
          </NextLink>
        ))}
      </Navbar.Collapse> */}
      <Navbar.Brand>
        <LightDark />
        Lawnmowers
      </Navbar.Brand>
    </Navbar>
  );
}
