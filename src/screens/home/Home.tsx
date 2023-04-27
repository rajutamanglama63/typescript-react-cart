import { useQuery } from 'react-query'
import { useContext } from 'react'
import Card from '../../components/card/Card'
import { CartItemType } from '../../react-app-env'
import { HomeContainer, RootDiv } from './Home.styles'
import { ProductContext } from '../../context/GlobalContext'

type Props = {}

// const getProducts = async (): Promise<CartItemType[]> => 
//     await (await fetch('https://fakestoreapi.com/products')).json()


const Home = (props: Props) => {

  const getProducts = useContext(ProductContext)
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  console.log("data: ", data)

  // if(isLoading) return <h1>Loading...</h1>

  // if(error) return <div>Something went wrong...</div>
  
  return (
    <RootDiv>
      <HomeContainer>
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeContainer>
    </RootDiv>
  )
}

export default Home