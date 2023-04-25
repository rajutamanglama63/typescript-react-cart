import styled from 'styled-components'

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
`

export const CloseBtnSection = styled.div`
    border: 1px solid yellow; 
    display: flex;
    justify-content: flex-end;
    padding: .4rem;
`

export const CloseBtn = styled.button`
    cursor: pointer;
    border: none;
    background-color: #F6D5D2;
`