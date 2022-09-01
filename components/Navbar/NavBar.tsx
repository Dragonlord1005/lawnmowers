import { Navbar, Link } from "@nextui-org/react";
import NextLink from "next/link"

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
      href: "/contact"
    },
    {
      name: "Terms",
      href: "/terms"
    }
  ]
  return (
    <Navbar>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content hideIn="xs">
        <NextLink href="/"><Navbar.Link>Home</Navbar.Link></NextLink>
        <NextLink href="/pricing"><Navbar.Link>Pricing</Navbar.Link></NextLink>
        <NextLink href="/contact"><Navbar.Link>Contact</Navbar.Link></NextLink>
        <NextLink href="/terms"><Navbar.Link>Terms</Navbar.Link></NextLink>
      </Navbar.Content>
      <Navbar.Collapse showIn="xs">
      {links.map((item, index) => (
        <Navbar.CollapseItem key={item.name}>
          <NextLink href={links.href as keyof typeof String}
            <Link>{links.name}</Link>
        </Navbar.CollapseItem>
      ))};
      </Navbar.Collapse>
      <Navbar.Brand>
        Lawnmowers
      </Navbar.Brand>

    </Navbar>
  )
}