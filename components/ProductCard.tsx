import { Product } from '../interfaces/product.interface'
import RedeemButton from '../components/RedeemButton'
import styled from 'styled-components'
import Image from 'next/Image'


const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    padding: 0;
    grid-template:
    [row1-start] "photo" auto [row1-end]
    [row2-start] "description" auto [row2-end]
    [row3-start] "button" auto [row3-end]
    / auto;
    gap: 1rem;

    & .photo {
        position: relative;
        height: 18.75rem;
        box-sizing: border-box;
        border: 1px solid var(--color-neutrals-300);
        border-radius: 1rem 1rem 0 0;
        grid-area: photo;
    }

    & .description {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        width: 100%;
        grid-area: description;
        border-radius: 0px 0px 16px 16px;
        border: 1px solid var(--color-neutrals-300);
    }

    & .description h3 {
        margin: 0;
        color: var(--color-neutrals-900);
        font-weight: var(--font-weight-semi-bold);
        line-height: 150%;
        font-size: 1rem;
        align-self: stretch;
    }

    & .description p {
        color: var(--color-neutrals-600);
        font-weight: var(--font-weight-semi-bold);
        font-size: 0.75rem;
        text-transform: uppercase;
        line-height: 150%;

    }

    @media (min-width: 768px) {
        width: 31%;
    }

    @media (min-width: 1025px) {
        width: 22%;
    }

`

const ProductCard = (props: {product: Product, points: number, redeemProduct: Function}) => {
    
    return  <StyledCard>
            <div>
                <div className='photo'>
                    <Image layout='fill'  objectFit='contain' loading='lazy' src={props.product.img.url} alt={props.product.name}/>
                </div>
                <div className='description'>
                    <h3>{props.product.name}</h3>
                    <p>{props.product.category}</p>
                </div>
            </div>
            <RedeemButton product={props.product} points={props.points} redeemProduct={props.redeemProduct}/>
    </StyledCard> 
        

}

export default ProductCard