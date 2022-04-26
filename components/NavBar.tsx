import { useState } from 'react'
import styled from 'styled-components'
import { Menu, MenuButton, MenuItem } from './Menu'
import ChevronArrow from './ChevronArrow'
import { User } from '../interfaces/user.interface'
import AeroPay from './AeroPay'

const StyledHeader = styled.header`
    padding: 1rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    & .aerolabLogo {
      width: 39px; 
      height: 36px;
      background-image: var(--icons-sprite);
      background-position: -160px -10px;
    }

    & .buttonWrapper {
      width: 15%;
      display: flex;
    }

    & .visible {
      display: flex;
      justify-content: flex-end;
    }

    & .invisible {
      display: none;
    }
    
    @media (min-width: 768px) {
      & header {
        padding-top: 2rem;
      }

    @media (min-width: 1025px) {
        position: fixed ;
        background: white;
        z-index: 999;

        & .aerolabLogo {
          width: 126px; 
          height: 48px;
          background-position: -14px -6px;
        }
      }
  }
`

const NavBar = (props: {user: User, addPoints: Function}) => {
  const [ isOpen, setIsOpen ] = useState<boolean>(false) 
  return <StyledHeader> 
            <a href='https://aerolab.us/'>
              <div className='aerolabLogo'/>
            </a>
            <div className='.buttonWrapper'>
              <Menu menuButton={<MenuButton onClick={()=>setIsOpen(!isOpen)}>
                <span>
                  <div className='icon-coin'/>
                  <span>{props.user.points}</span>
                </span>
                <ChevronArrow isOpen={isOpen}/></MenuButton>} transition>
                <MenuItem disabled>
                  <AeroPay user={props.user} addPoints={props.addPoints}/>
                </MenuItem>
              </Menu>
            </div>
  </StyledHeader>
}

export default NavBar