import { StyledWalkthroughCard } from '../styles/styledWalkthroughCard'


const WalkthroughCard = (props: {name: string, title: string, description: string}) => {

    return <StyledWalkthroughCard className={props.name}>
            <div className='image'>
                <figure className={props.name}/>
            </div>
            <div className='content'>
                <div className={`${props.name} icon`}/>
                <h3> {props.title}</h3>
                <p>{props.description}</p>
            </div>
        
    </StyledWalkthroughCard>
}

export default WalkthroughCard