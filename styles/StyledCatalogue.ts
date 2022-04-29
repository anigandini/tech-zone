import styled from 'styled-components'

export const StyledCatalogue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .filters {
        gap: 1rem;
    }


    & .row {
        width:  100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    & .react-select__control {
        color: var(--color-neutrals-600);
        box-shadow: var(--box-shadow);
        width: 100%;
        border-radius: 1rem;
        padding: 0.5rem;
    }


    & .react-select__indicator {
        width: 12px;
        height: 12px;
        background: var(--icons-sprite) -185px -170px;
        padding: 0;
    }

    & .react-select__indicator svg,
    & .react-select__indicator-separator {
        display: none;
    }

    & button {
        background: var(--color-brand-light);
        border-radius: 12px;
        border: none;
        padding: 0.5rem 1rem;
    }

    & button.active {
        background: var(--color-brand-default);
    }

    & button.active:hover {
        background: var(--color-brand-hover);
    }

    & button .label {
        background: var(--color-brand-default);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1rem;
        font-weight: var(--font-weight-semi-bold);
    }

    & button.active .label {
        background: var(--color-brand-light);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }


    & label {
        display: none;
    }

    & h2 {
        font-weight: var(--font-weight-bold);
        font-size: 2rem;
    }

    & h2:before {
        content: "TECH ";
        background: var(--color-brand-default);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & .filters {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between; 
    }

    & .catalogue {
        display: flex;
        flex-flow: row wrap;
        align-items: space-between;
        justify-content: space-between;
    }

    @media (min-width: 766px) {
        & .row {
            justify-content: flex-start;
            gap: 1rem;
        }
        
        & .react-select__control,
        .react-select__menu {
            width: 30%;
        }
        
    }

    @media (min-width: 1024px) {
        padding-top: 5rem;
        font-size: 1.125rem;

        .filters {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            gap: 2rem;
        }



        & .react-select__control,
        .react-select__menu {
            width: 20rem;
        }
        

        label {
            display: block;
            color: var(--color-neutrals-600);
            white-space: nowrap;
        }

    }
`