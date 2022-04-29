import styled from 'styled-components'
import { useState } from 'react'

const Notification = styled.div`
    padding: 1.5rem;
    border: 1px solid;
    background-color: white;
    font-size: 1rem;
    width: 100%;
    color: var(--color-neutrals-600);
    font-weight: var(--color-neutrals-600);
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: start;

    & button {
        border: none;
        background-color: transparent;
    }

    & figure,
    & button {
        background-image: var(--icons-sprite);
        width: 20px;
        height: 20px;
        margin: 0;
    }

    & .close{
        background-position: -111px -126px;
        justify-self: flex-end;
        z-index: 999;
        
    }

    &.closed {
        display: none;
    }

    & .bold {
        color: var(--color-neutrals-900);
    }

    &.success .icon{
        background-position: -215px -50px; 
    }

    &.success {
        border-color: var(--color-green-default);
    }

    &.error {
        border-color: var(--color-red-default);
    }

    &.error .icon{
        background-position: -215px -10px;
        padding-right: 1rem;
    }

    @media (min-width: 1024px) {
        width: 40%;
    }
`

export const RedeemNotification = (props: {type: 'success'|'error', productName: string}) => {
    const text = props.type === 'success' ? <span><span className="bold">{props.productName}</span> redeemed successfully</span> : <span>There was a problem with the transaction</span>
    const [closed, setClosed] = useState(false)
    return <Notification className={`${props.type} ${closed? 'closed' : ''}`}>
        <figure className="icon"/>
        {text}
        <button className="close" onClick={()=>setClosed(true)}/>
        </Notification>

}
            