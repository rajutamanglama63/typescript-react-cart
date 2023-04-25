import {  XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { CartDrawer, CartIcon, CartSection, CloseBtn, CloseBtnSection, ItemCounter, Logo, NavContainer, StyledNavbar } from './Nav.styles'

type Props = {}

const Navbar = (props: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  return (
    <StyledNavbar>
      <NavContainer>
          <Logo>Shopping Cart</Logo>
          <CartSection>
            <CartIcon>
              <ShoppingCartIcon onClick={() => setIsToggled(true)}  />
            </CartIcon>
            <ItemCounter>1</ItemCounter>
          </CartSection>
          {isToggled && (
            <CartDrawer>
              <CloseBtnSection>
                <CloseBtn onClick={() => setIsToggled(false)}  >
                  <XMarkIcon style={{height: "2rem", width: "2rem", color: "#e66465"}} />
                </CloseBtn>
              </CloseBtnSection>
            </CartDrawer>
          )}
      </NavContainer>
    </StyledNavbar>
  )
}

export default Navbar