import { Product } from '../interfaces/product.interface'
import styled from 'styled-components'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { RedeemNotification } from './RedeemNotification'



const StyledRedeemButton = styled.button`
    &.active:disabled {
        background: var(--color-neutrals-200);
        color: var(--color-neutrals-600);
    }

    &.active:disabled:hover {
        background: var(--color-neutrals-200);
    }
    
    &.processing {
        background: linear-gradient(102.47deg, rgba(23, 111, 235, 0.7) -5.34%, rgba(255, 128, 255, 0.7) 106.58%);
        color: white;
        font-weight: var(--font-weight-semi-bold);
        font-size: 1rem;
        padding: 1.1rem;
    }

    

    &.active:disabled .label {
        background-clip: revert;
        text-fill-color: revert;
        -webkit-text-fill-color: revert;
        -webkit-background-clip: revert;
        gap: 0.5rem;
    }
    
    
    &:hover {
        background: var(--color-brand-hover);
    }

    & .label {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & figure {
        margin: 0.2rem;
    }

    & .icon-coin-disabled {
        width: 30px;
        height: 30px;
        background: var(--icons-sprite) -156px -118px;
    }

    & .icon-coin {
        width: 30px;
        height: 30px;
        background: var(--icons-sprite) -104px -77px;
    }

`

const RedeemButton = (props: {product: Product, points: number, redeemProduct: Function}) => {
    const [processing, setProcessing] = useState<boolean>(false)
    const cantRedeem: boolean = props.product.cost > props.points 

    const handleClick = async () => {
        setProcessing(true)
        const res: number = await props.redeemProduct(props.product)
        toast.custom((t)=>(<RedeemNotification type={res===200?'success':'error'} productName={props.product.name}/>))
        setProcessing(false)

    }

    return ( processing ? 
        <StyledRedeemButton className='redeem processing'> Processing ...</StyledRedeemButton>
    :
    
        <StyledRedeemButton className='active redeem' onClick={handleClick} disabled={cantRedeem ? true : false}>
            <span className='label'>{cantRedeem ? 'You need  ': 'Redeem for'}
            <figure className={cantRedeem ? 'icon-coin-disabled': 'icon-coin'}/>{cantRedeem ? props.product.cost - props.points : props.product.cost}</span>
        </StyledRedeemButton>


    )
}
    


export default RedeemButton