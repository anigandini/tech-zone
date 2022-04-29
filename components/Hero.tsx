import { Button } from '../styles/scrollButton'
import { StyledHero } from '../styles/styledHero'
import BrowseChooseEnjoy from '../components/BrowseChooseEnjoy'


const Hero = () => {
    return <StyledHero  className='.bg-wave'>
            <div className="gradient-bg" />
            <div className="container">
                <span>Explore the</span>
                <h1>ZONE</h1>
                <p>Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.</p>
                <Button 
                    smooth={true}
                    to={'catalogue'}
                    type='button'
                >  <span className='btn-text'>VIEW ALL PRODUCTS</span><div/>
                </Button >
                <figure className='hero'/>
            </div>
            <BrowseChooseEnjoy />
    </StyledHero>

}

export default Hero