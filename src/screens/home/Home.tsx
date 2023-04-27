import { useQuery } from 'react-query'
import Card from '../../components/card/Card'
import { CartItemType } from '../../react-app-env'
import { HomeContainer, RootDiv } from './Home.styles'

type Props = {}

const getProducts = async (): Promise<CartItemType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json()


const Home = (props: Props) => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  // console.log("data: ", data)

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