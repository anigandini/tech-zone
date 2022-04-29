import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;

    & a {
        color: var(--color-neutrals-600);
        display: flex;
        gap: 0.5rem;

        & .githubIcon {
            width: 30px; 
            height: 30px;
            background: var(--icons-sprite) -53px -171px;
        }
    }

    & a:hover {
        & .githubIcon {
            width: 30px; 
            height: 30px;
            background: var(--icons-sprite) -158px -68px;
        }

        background: var(--color-brand-default);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.3rem;
        font-weight: var(--font-weight-bold);
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