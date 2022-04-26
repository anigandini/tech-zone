import { menuSelector } from "@szhsin/react-menu/style-utils";
import {
    Menu as MenuInner,
    MenuItem as ItemInner,
    MenuButton as ButtonInner
  } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import styled, { keyframes } from 'styled-components'

export const menuShow = keyframes`
  from {
    opacity: 0;
  }
`

export const menuHide = keyframes`
  to {
    opacity: 0;
  }
`

export const Menu = styled(MenuInner)`

  ${menuSelector.stateOpening} {
    animation: ${menuShow} 0.15s ease-out;
  }

  // NOTE: animation-fill-mode: forwards is required to
  // prevent flickering with React 18 createRoot()
  ${menuSelector.stateClosing} {
    animation: ${menuHide} 0.2s ease-out forwards;
  }

  & .szh-menu__item {
    width: 100%;
  }

`

export const MenuItem = styled(ItemInner)`
  width: 100%
  display: flex;
  flex-direction: column;
  alig-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-neutrals-300);
  padding: 0.5rem;
  box-shadow: var(--box-shadow);


  & .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
      border-bottom: 1px solid var(--color-neutrals-300);
  }

  & button {
      background-color: var(--color-neutrals-0);
      margin: 0;
      border: none;
      font-size: 1rem;
  }

  & button.active {
      font-size: 1.5rem;
      font-weight: var(--font-weight-semi-bold);
  }

  & .visible {
      display: block;
  }

  & .invisible {
      display: none;
  }

  @media (min-width: 768px) {
      width: 50%;
  }
  @media (min-width: 1025px) {
      width: 25%;
  }
`

export const MenuButton = styled(ButtonInner)`
    width: 100%;
    border-radius: 1rem;
    border: 1px solid var(--color-neutrals-300);
    background-color: var(--color-neutrals-0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--box-shadow);
    padding: 0.4rem;
    font-weight: var(--font-weight-semi-bold);

    & .icon-coin {
      width: 24px;
      height: 24px;
      background: var(--icons-sprite) -10px -170px;
    }

    & span {
      background: var(--color-brand-default);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: flex;
      align-items: center;
      padding: 0.3rem;
    }
`