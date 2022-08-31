import { Navbar } from "@nextui-org/react";
import NextLink from "next/link"

export default function NavBar() {
  return (
    <Navbar>
      <Navbar.Content>
        <NextLink href="/"><Navbar.Link>Home</Navbar.Link></NextLink>
        <NextLink href="/pricing"><Navbar.Link>Pricing</Navbar.Link></NextLink>
        <NextLink href="/contact"><Navbar.Link>Contact</Navbar.Link></NextLink>
        <NextLink href="terms"><Navbar.Link>Terms</Navbar.Link></NextLink>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>Lawnmowers</Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}