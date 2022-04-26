import img from '../assets/icons_sprite.webp'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    padding: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;

    & a {
        display: flex;
        gap: 0.5rem;
    }

    & a:hover {
        & .githubIcon {
            width: 30px; 
            height: 30px;
            background: url(${img.src}) -158px -68px;
        }
    }

    & .githubIcon {
        width: 30px; 
        height: 30px;
        background: url(${img.src}) -53px -171px;
    }
`

const Footer = () => {
    return <StyledFooter>
        <a
          href="https://github.com/anigandini/tech-zone"
          target="_blank"
          rel="noopener noreferrer"
        >
            <div className='githubIcon'/>
          <span>View this repository</span>
        </a>
    </StyledFooter>
}

export default Footer