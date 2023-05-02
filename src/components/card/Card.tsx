import { FC, useContext, useEffect } from 'react'
import { useQuery } from 'react-query';
import { CartContext } from '../../context/CartContext';
import { ProductContext } from '../../context/GlobalContext';
import { ItemListContext } from '../../context/ItemList';
import { ProductContextType } from '../../react-app-env';
import { AddBtn, Description, Image, Price, StyledCard, Title } from './Card.styles'


type DatumType = { 
  datum: ProductContextType
}



const Card: FC<DatumType> = ({datum}) => {
  const {cartItem, setCartItem} = useContext(CartContext);
  console.log("cartItemId: ", cartItem)
  const {cartItemList} = useContext(ItemListContext);
  const getProducts = useContext(ProductContext)
  const {data} = useQuery<ProductContextType[]>('products', getProducts)

  useEffect(() => {
    const foundItem = data?.find((singleData) => singleData.id === cartItem)
    if(foundItem) {
      cartItemList.push(foundItem)
      console.log("from card: ", cartItemList)
    }
    
  }, [cartItem, data, cartItemList])
  
  return (
    <StyledCard>
        <Image alt='product-img' src={datum.image} />
        <Title>{datum.title}</Title>
        <Price><span style={{"fontWeight": "700"}}>Price</span>: Rs {datum.price}</Price>
        <Description>{datum.description}</Description>
        <AddBtn variant='outline' onClick={() => setCartItem(datum.id)}>Add To Cart</AddBtn>
    </StyledCard>

    // <div className='col-4'>
    //   <div className="card" style={{width: "16rem"}}>
    //   <Image alt='product-img' src={datum.image} />
    //     <div className="card-body">
    //       <Title>{datum.title}</Title>
    //         <Price><span style={{"fontWeight": "700"}}>Price</span>: Rs {datum.price}</Price>
    //         <Description>{datum.description}</Description>
    //       <a href="#" className="btn btn-primary">Add To Cart</a>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Card