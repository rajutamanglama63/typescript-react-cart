import {  XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { CartDrawer, CartIcon, CloseBtn, Logo, NavContainer, StyledNavbar } from './Nav.styles'

type Props = {}

const Navbar = (props: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  return (
    <StyledNavbar>
      <NavContainer>
          <Logo>Shopping Cart</Logo>
          <CartIcon>

          <ShoppingCartIcon onClick={() => setIsToggled(true)}  />
          </CartIcon>
          {isToggled && (
            <CartDrawer>
              <CloseBtn>
                <button onClick={() => setIsToggled(false)} style={{border: "none"}} >
                  <XMarkIcon style={{height: "2rem", width: "2rem", color: "#e66465"}} />
                </button>
              </CloseBtn>
            </CartDrawer>
          )}
      </NavContainer>
    </StyledNavbar>
  )
}

export default Navbar