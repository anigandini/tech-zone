import styled from 'styled-components'
import WalkthroughCard from './WalkthroughCard'
/*import dynamic from 'next/dynamic'
const Anime = dynamic(() => import('react-anime'), {ssr: false})*/

const StyledBrowseChooseEnjoy = styled.div`
    width: 100%;
    padding: 0;
    postion: relative;
    transform: translateY(-51px);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 0.2rem;
    }

    @media (min-width: 1025px) {
        flex-direction: row;
        width: 100%;
        transform: translateY(0px);
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        grid-area: carousel;
        gap: 0;

        .choose-desktop,
        .browse-desktop,
        .enjoy-desktop {
            width: 540px;
            height: 540px;
            background-size: 1390px 1390px;
        }
    }
`

type Card = {
    name: string,
    title: string,
    description: string
}

const BrowseChooseEnjoy = () => {
    const cards = [{
        name: 'browse',
        title: '1—browse',
        description: 'Browse our tech catalog with more than 20 top tech products'
    },
    {
        name: 'choose',
        title: '2—choose',
        description: 'Exchange your hard earned AeroPoints for the item you want'
    },
    {
        name: 'enjoy',
        title: '3—enjoy!',
        description: 'All done, you can relax! We’ll take care of delivery of your tech items'
    }]

    const cardList = cards.map((card: Card)=>{return <WalkthroughCard key={card.name} name={card.name} title={card.title} description={card.description} />})
    return <StyledBrowseChooseEnjoy>
        {cardList}
    </StyledBrowseChooseEnjoy>
}

export default BrowseChooseEnjoy