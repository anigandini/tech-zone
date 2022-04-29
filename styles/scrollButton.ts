import styled from 'styled-components'
import Scroll from 'react-scroll'

export const Button = styled(Scroll.Link)`
    background: var(--color-brand-default);
    border-radius: 24px;
    box-shadow: var(--box-shadow);
    border: none;
    width: 18rem;
    height: 4rem;
    text-transform: uppercase;
    font-weight: var(--font-weight-semi-bold);
    font-size: 1rem;
    line-height: 150%;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    
    & span {
        color: white;
    }

    & div {
        width: 24px;
        height: 24px;
        background: var(--icons-sprite) -3px -210px;
    }


    &:hover {
        background: var(--color-brand-hover);
    }

    @media (min-width: 768px){
        width: 20rem;
    }
`