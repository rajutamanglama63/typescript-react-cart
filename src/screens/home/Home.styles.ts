import styled from "styled-components";

export const RootDiv = styled.div`
    height: calc(100vh - 50px);
    position: relative;
    top: 50px;
`

export const HomeContainer = styled.div`
    // border: 1px solid green;
    margin: 0 auto;
    width: 60%;
    padding: 4rem 0rem;
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: auto auto auto;

    @media (max-width: 768px) {
        grid-template-columns: auto auto;
        padding: 2rem 0;
        margin: 0 auto;
        width: 80%;
    }

    @media (max-width: 480px) {
        grid-template-columns: auto;
        padding: 2rem 0;
        margin: 0 auto;
        width: 80%;
    }

    @media (max-width: 360px) {
        grid-template-columns: auto;
        padding: 2rem 0;
        margin: 0 auto;
        width: 80%;
    }

    // @media (max-width: 540px) {
    //     grid-template-columns: auto;
    //     padding: 2rem 0;
    //     margin: 0 auto;
    //     width: 80%;
    // }

    // @media (max-width: 912px) {
    //     grid-template-columns: auto auto;
    //     padding: 2rem 0;
    //     margin: 0 auto;
    //     width: 70%;
    // }
`