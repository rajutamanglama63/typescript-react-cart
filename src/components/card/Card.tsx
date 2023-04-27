import { FC } from 'react'
import { AddBtn, Description, Image, Price, StyledCard, Title } from './Card.styles'


type Props = {}

const Card: FC = (props: Props) => {
  return (
    <StyledCard>
        <Image alt='product-img' src='https://images.unsplash.com/photo-1614008262085-fad18b3eeef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
        <Title>Camara</Title>
        <Price><span style={{"fontWeight": "700"}}>Price</span>: Rs 123</Price>
        <Description>Lorem Ipsum is simply dummy text 
          of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has survived not only 
          five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged
        </Description>
        <AddBtn variant='outline'>Add To Cart</AddBtn>
    </StyledCard>
  )
}

export default Card