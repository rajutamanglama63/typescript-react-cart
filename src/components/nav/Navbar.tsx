import {  XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { FC, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/GlobalContext";

import { ItemListContext } from "../../context/ItemList";
import { ProductContextType } from "../../react-app-env";
import { CartDrawer, CartIcon, CartItem, CartSection, CloseBtn, CloseBtnSection, CounterBtn, Divider, GrandTotal, Image, ItemCounter, LogisticSide, Logo, NavContainer, Price, StyledNavbar, Title } from './Nav.styles'

type Props = {}


const Navbar: FC = (props: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const {cartItem} = useContext(CartContext);
  // const {cartItemList} = useContext(ItemListContext);
  // const getProducts = useContext(ProductContext)
  // const {data, isLoading, error} = useQuery<ProductContextType[]>('products', getProducts)
  


  console.log("cartItemId: ", cartItem)
  const {cartItemList, setCartItemList} = useContext(ItemListContext);
  const getProducts = useContext(ProductContext)
  const {data} = useQuery<ProductContextType[]>('products', getProducts)

  useEffect(() => {
    const foundItem = data?.find((singleData) => singleData.id === cartItem)
    if(foundItem) {
      if (!cartItemList.some((item) => item.id === foundItem.id)) {
        setCartItemList((prevCartItemList) => [...prevCartItemList, foundItem]);
        console.log("from card: ", cartItemList)
      }
    }
    
  }, [cartItem, data, setCartItemList, cartItemList])

  console.log("from outside of useEffect: ", cartItemList)
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

              {cartItemList.length !== 0 ? cartItemList.map((product: ProductContextType) => (

                  <CartItem key={product.id}>
                <LogisticSide>
                  <Title>{product.title}</Title>
                  <Divider>
                    <Price><span style={{"fontWeight": "700"}}>Price</span>: Rs {product.price}</Price>
                    <Price><span style={{"fontWeight": "700"}}>Total</span>: Rs 123</Price>
                  </Divider>
                  <Divider>
                    <CounterBtn variant="outline">+</CounterBtn>
                    <span>1</span>
                    <CounterBtn variant="outline">-</CounterBtn>
                  </Divider>
                </LogisticSide>
                {/* <ImgSide> */}
                  <Image alt='product-img' src={product.image} />
                {/* </ImgSide> */}
              </CartItem>
              
              )) : null}

              <GrandTotal>Grand Total: Rs 123</GrandTotal>
            </CartDrawer>
          )}
      </NavContainer>
    </StyledNavbar>
  )
}

export default Navbar