import styled from 'styled-components'

export const StyledWalkthroughCard = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid (--color-neutrals-300);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    box-shadow: var(--box-shadow);

   

    & figure {
        width: 400px;
        height: 300px;
        background-image: var(--illustrations-sprite);
        margin: 0;
        background-size: 1932px 1932px;
    }
    
    & figure.enjoy {
        background-position: -1565px -887px;
    }

    & figure.browse {
        background-position: -1575px -55px;
    }

    & figure.choose {
        background-position: -1566px -440px;
    }

    & div.icon {
        width: 30px;
        height: 30px;
        background-color: var(--color-brand-light2);
        border-radius: 8px;
        background-image: var(--icons-sprite);
    }

    & div.icon.browse {
        background-position: -209px -86px;
    }

    & div.icon.choose {
        background-position: -208px -125px;
    }

    & div.icon.enjoy {
        background-position: -137px -170px;
    }

    & .image {
        width: 100%;
        background: var(--color-special-illustration-bg);
        border: 1px solid var(--color-neutrals-300);
        border-radius: 24px 24px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .content {
        background-color: white;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        padding: 16px 24px 24px;
        border-radius: 0px 0px 24px 24px;
        color: var(--color-neutrals-600);
        font-weight: var(--font-weight-semi-bold);

    }

    & .content p {
        padding: 0.25rem 0;
        width: 100%;
    }

    & .content figure {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-brand-light);
        padding: 0.25rem;
        border-radius: 0.5rem;
    }

    & .content figure span {
        padding: 0;
    }

    h3 {
        text-transform: uppercase;
        padding-left: 1rem;
        font-weight: var(--font-weight-bold);
        background: var(--color-brand-default);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        font-size: 1.5rem;
    }

    @media(min-width: 768px) {
        width: 33.3%;
        display: flex;

        & .image {
            height: 80%;
            background: var(--color-special-illustration-bg);
            border: 1px solid var(--color-neutrals-300);
            border-radius: 24px 24px 0px 0px;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        & figure {
            width: 200px;
            height: 200px;
            background-size: 966px 966px;
        }

        & figure.enjoy {
            background-position: -760.5px -421.5px;
        }
    
        & figure.browse {
            background-position: -774.5px -27.5px;
        }
    
        & figure.choose {
            background-position: -764px -212px;
        }

        .content {
            display: grid;
            grid-template: [row1-start] "icon title" auto [row1-end]
                [row2-start] "description description" auto [row2-end]
                / auto auto;
            align-items: center;
            height: 100%;
        }

        .content h3 {
            grid-area: title;
            padding: 0;
            font-size: 1rem;
            align-self: start;
        }


        .content .icon {
            grid-area: icon;
            justify-self: start;
            align-self: start;
        }

        .content figure span {
            width: 100%;
        }

        & .content p {
            grid-area: description;
            grid-column: 1/-1;
            text-align: start;
            font-size: 1rem;
            width: 100%;
        }

        @media(min-width: 1025px) {
            width: 100%;

            &.browse {
                transform: translateX(6%) rotate(-3deg);
                z-index: -1;
            }
        
            &.enjoy {
                transform: translateX(-6%) rotate(3deg);
            }

            & figure {
                width: 400px;
                height: 300px;
                background-size: 1932px 1932px;
                transform: scale(1);
            }

            & figure.enjoy {
                background-position: -1521px -843px;
            }
        
            & figure.browse {
                background-position: -1549px -55px;
            }
        
            & figure.choose {
                background-position: -1528px -424px;
            }

            & .image {
                height: 400px;
            }

        @media(min-width: 1400px) {
            width: 33.25rem;
        }
        

        
    }
`