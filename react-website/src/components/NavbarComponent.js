import { Navbar, NavLink } from '@material-tailwind/react';

function NavbarComponent() {
  return (
    <Navbar>
      <NavLink href="#" activeClassName="active">
        Home
      </NavLink>
      <NavLink href="#about" activeClassName="active">
        About
      </NavLink>
      <NavLink href="#contact" activeClassName="active">
        Contact
      </NavLink>
    </Navbar>
  );
}