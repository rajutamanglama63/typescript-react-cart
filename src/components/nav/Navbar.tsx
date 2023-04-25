import {  XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Logo, NavContainer, StyledNavbar } from './Nav.styles'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <StyledNavbar>
      <NavContainer>
          <Logo>Shopping Cart</Logo>
          <ShoppingCartIcon style={{height: "2rem", width: "2rem", color: "#e66465"}} />
      </NavContainer>
    </StyledNavbar>
  )
}

export default Navbar