import { FC } from 'react'
import { ProductContextType } from '../../react-app-env';
import { AddBtn, Description, Image, Price, StyledCard, Title } from './Card.styles'


type DatumType = {
  
  datum: ProductContextType
    
  
}

const Card: FC<DatumType> = ({datum}) => {
  return (
    <StyledCard>
        <Image alt='product-img' src={datum.image} />
        <Title>Camara</Title>
        <Price><span style={{"fontWeight": "700"}}>Price</span>: Rs {datum.price}</Price>
        <Description>{datum.description}</Description>
        <AddBtn variant='outline'>Add To Cart</AddBtn>
    </StyledCard>
  )
}

export default Card