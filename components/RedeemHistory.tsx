import { User } from '../interfaces/user.interface'
import Image from 'next/Image'
import styled from 'styled-components'

const styledHistory = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const RedeemHistory = (props: {user: User}) => {
    //const history = props.user.redeemHistory.map((product: any)=><Image key={product._id} src={product.img.url} alt={product.name} layout='fill'/>)
    return <styledHistory>
        history
    </styledHistory>
}

export default RedeemHistory