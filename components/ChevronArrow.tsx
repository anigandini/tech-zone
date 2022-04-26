import styled from 'styled-components'

const StyledArrow = styled.div`
    width: 24px;
    height: 24px;
    background: var(--icons-sprite) -98px -173px;

    &.origin {
        transform:rotate(270deg);
        transition: 0.4s;
    }

    &.rotate {
        transform: rotate(90deg);
        transition: 0.4s;
}`

const ChevronArrow = (props: {isOpen : boolean}) => {
    return <StyledArrow className={`${'icon-chevron'} ${props.isOpen ? 'rotate' : 'origin'}`}/>
}

export default ChevronArrow