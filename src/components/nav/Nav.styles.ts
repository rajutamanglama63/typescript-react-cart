import styled from 'styled-components'
import { ButtonType } from '../../react-app-env'

export const StyledNavbar = styled.div`
    // height: 70px;
    width: 100%;
    border: 2px solid #E58799;
    position: fixed;
    z-index: 50;
    top: 0
    display: flex;
    align-items: center;
`

export const NavContainer = styled.div`
    margin: 0 auto;
    width: 60%;
    height: 50px;
    // border: 1px solid pink;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        margin: 0 auto;
        width: 80%;
      }
`

export const Logo = styled.div`
    letter-spacing: .2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #E58799;

    @media (max-width: 768px) {
        letter-spacing: .1rem;
        font-size: 1.2rem;
      }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`

export const CartSection = styled.div`
    position: relative;
    cursor: pointer;
`

export const CartIcon = styled.div`
      width: 2rem;
      height: 2rem;
      color: #e66465;

      @media (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
      }

      @media (max-width: 480px) {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
`

export const ItemCounter = styled.span`
    position: absolute;
    font-size: 0.5rem;
    color: #000;
    background-color: red;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 768px) {
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
    }
`

export const CartDrawer = styled.div`
    height: 100%;
    width: 60%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    background-color: #F6D5D2;

    @media (max-width: 768px) {
        width: 75%;
    }    
`

export const CloseBtnSection = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: .4rem;
`

export const CloseBtn = styled.button`
    cursor: pointer;
    border: none;
    background-color: #F6D5D2;
`

export const CartItem = styled.div`
    display: flex;
    border: 2px solid #e66465;
    height: 10rem;
    align-items: center;
    padding: 10px;
`

export const LogisticSide = styled.div`
    flex: 8;
    // background-color: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: .5rem;
`

export const Divider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.p`
    font-weight: 700;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const Price = styled.p`
    font-weight: 500;
    margin: .2rem 0;

    @media (max-width: 768px) {
        font-weight: 400;
    }
`

export const CounterBtn = styled.button<ButtonType>`
    background-color: #d3d3d3;
    padding: 1rem;
    border-radius: 5px;
    border: none;

    &:hover {
        background-color: ${props => props.variant !== "outline" ? "#d3d3d3" : "#fff"}
    }

    @media (max-width: 768px) {
        padding: .5rem;
    }
`

// export const ImgSide = styled.div`
//     flex: 4;
//     height: 100%;
//     background-color: #f4f4f4;
// `

export const Image = styled.img`  
    flex: 4;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 40%;
    }

    @media (max-width: 1250px) {
        width: 40%;
`

export const GrandTotal = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
    margin: 1rem 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

