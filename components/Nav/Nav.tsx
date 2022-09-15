import { Navbar, Link } from "@nextui-org/react";
import NextLink from "next/link";
import LightDark from "../LightDark/LightDark";

export default function Nav() {
  return (
    <Navbar isBordered variant={"floating"}>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content hideIn="xs">
        <NextLink href="/" prefetch={false}>
          <Navbar.Link>Home</Navbar.Link>
        </NextLink>
        <NextLink href="/pricing" prefetch={false}>
          <Navbar.Link>Pricing</Navbar.Link>
        </NextLink>
        <NextLink href="/contact" prefetch={false}>
          <Navbar.Link>Contact</Navbar.Link>
        </NextLink>
        <NextLink href="/terms" prefetch={false}>
          <Navbar.Link>Terms</Navbar.Link>
        </NextLink>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        <Navbar.CollapseItem>
          <NextLink href="/" prefetch={false}>
            <Link>Home</Link>
          </NextLink>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <NextLink href="/pricing" prefetch={false}>
            <Link>Pricing</Link>
          </NextLink>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <NextLink href="/contact" prefetch={false}>
            <Link>Conact</Link>
          </NextLink>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <NextLink href="/terms" prefetch={false}>
            <Link>Terms</Link>
          </NextLink>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
      <Navbar.Brand>
        <LightDark />
        Lawnmowers
      </Navbar.Brand>
    </Navbar>
  );
}
