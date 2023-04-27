import styled from "styled-components";
import { ButtonType } from "../../react-app-env";

export const StyledCard = styled.div`
    border: 2px solid #E58799;
    padding: .2rem;
    // height: 100%;
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 100%;
    height: 15rem;
    object-fit: contain;

    @media (max-width: 768px) {
        height: 15rem;
    }

    @media (max-width: 1250px) {
        height: 12rem;
    }
`

export const Title = styled.p`
    font-weight: 700;
`

export const Price = styled.p`
    font-weight: 500;
    margin: .2rem 0;
`

export const Description = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-weight: 400;
    color: grey;
    text-overflow: ellipsis;
    line-height: 1.5;
`

export const AddBtn = styled.button<ButtonType>`
    width: 100%;
    padding: .5rem;
    color: #000;
    border: none;
    font-weight: bold;
    background-color: #d3a096;
    cursor: pointer;

    &:hover {
        background-color: ${props =>
          props.variant !== 'outline' ? '#FFF' : '#f0dcd8'};
    };
`