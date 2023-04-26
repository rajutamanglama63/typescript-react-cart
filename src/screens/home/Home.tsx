import { useQuery } from 'react-query'
import { CartItemType } from '../../react-app-env'
import { RootDiv } from './Home.styles'

type Props = {}

const getProducts = async (): Promise<CartItemType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json()


const Home = (props: Props) => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts)
  console.log("data: ", data)
  
  return (
    <RootDiv>This is Home screen.</RootDiv>
  )
}

export default Home