import { User } from "../interfaces/user.interface";
import { useState } from 'react'
import AeroCard from './AeroCard'
import styled from 'styled-components'

const StyledAddBalanceContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;

    & div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
    } 

    & button {
        font-size: 1rem;
        border-radius: var(--border-radius);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%

    }

    & div button span {
        padding: 0;
        background: var(--color-brand-default);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & button span {
        padding: 0.5rem;
    }


    & button:hover {
        background-color: var(--color-neutrals-100);
    }

    & button.selected {
        background: var(--color-brand-default);
        border-radius: var(--border-radius);
        padding: 0.5rem 0.8rem;
        font-size: 1rem;
        font-weigth: var(--font-weight-semi-normal);
    }
    
    & button.selected span {
        -webkit-text-fill-color: var(--color-neutrals-0);

    & button.selected:hover {
        background: var(--color-brand-hover);
    }
`

const AddBalance = (props: {user: User|Partial<User>, addPoints: Function}) => {
    const [ activeButton, setActiveButton] = useState<1000|5000|7500>(5000)
    const handleClick = (amount: 1000|5000|7500) => {
        setActiveButton(amount)
    }

    return <StyledAddBalanceContent>
            <AeroCard/>
            <div>
                <button className={`${activeButton === 1000  ? 'selected' : ''}`} onClick={()=>handleClick(1000)}><span>1000</span></button>
                <button className={`${activeButton === 5000  ? 'selected' : ''}`} onClick={()=>handleClick(5000)}><span>5000</span></button>
                <button className={`${activeButton === 7500  ? 'selected' : ''}`} onClick={()=>handleClick(7500)}><span>7500</span></button>
            </div>
        <button className={'selected'} onClick={()=>{props.addPoints(activeButton)}}><span className='icon-coin'/><span>Add Points</span></button>
    </StyledAddBalanceContent>
}

export default AddBalance