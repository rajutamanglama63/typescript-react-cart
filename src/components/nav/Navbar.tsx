import {  XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { FC, useState } from "react";
import { CartDrawer, CartIcon, CartItem, CartSection, CloseBtn, CloseBtnSection, CounterBtn, Divider, GrandTotal, Image, ItemCounter, LogisticSide, Logo, NavContainer, Price, StyledNavbar, Title } from './Nav.styles'

type Props = {}

const Navbar: FC = (props: Props) => {
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

              <CartItem>
                <LogisticSide>
                  <Title>Camara</Title>
                  <Divider>
                    <Price><span style={{"fontWeight": "700"}}>Price</span>: Rs 123</Price>
                    <Price><span style={{"fontWeight": "700"}}>Total</span>: Rs 123</Price>
                  </Divider>
                  <Divider>
                    <CounterBtn variant="outline">+</CounterBtn>
                    <span>1</span>
                    <CounterBtn variant="outline">-</CounterBtn>
                  </Divider>
                </LogisticSide>
                {/* <ImgSide> */}
                  <Image alt='product-img' src='https://images.unsplash.com/photo-1614008262085-fad18b3eeef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                {/* </ImgSide> */}
              </CartItem>

              <GrandTotal>Grand Total: Rs 123</GrandTotal>
            </CartDrawer>
          )}
      </NavContainer>
    </StyledNavbar>
  )
}

export default Navbar