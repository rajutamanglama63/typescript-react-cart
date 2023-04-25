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
    width: 50%;
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

export const CartDrawer = styled.div`
    height: 100%;
    width: 60%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 30;
    background-color: #E58799;
`

export const CloseBtn = styled.div`
    display: flex;
    justify-contain: flex-end;
    padding: 2rem;
`