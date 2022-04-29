import { User } from '../interfaces/user.interface'
import AddBalance from './AddBalance'
import styled from 'styled-components'

const StyledAeroPay = styled.div`
    & h3 {
        color: var(--color-neutrals-900);
        padding-left: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--color-neutrals-300);
    }

`

const AeroPay = (props: {user: User|Partial<User>, addPoints: Function}) => {
    
    return <StyledAeroPay>
        <h3>
            Add Balance
        </h3>
        <AddBalance user={props.user} addPoints={props.addPoints}/>
    </StyledAeroPay> 
}

export default AeroPay 