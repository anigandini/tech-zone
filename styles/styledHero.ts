import styled from 'styled-components'


export const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23dae4f2' fill-opacity='0.95' fill-rule='evenodd'/%3E%3C/svg%3E");
    
    & .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & .gradient-bg {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80%;
        z-index: -1;
        background: var(--color-special-section-bg);
        mask-image: linear-gradient(to bottom, transparent, black, black, black);
    }
    
    & span,
    & h1,
    & p,
    & input {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        padding: 1rem;
        font-family: 'Montserrat', sans-serif;
   }

   & span {
        text-transform: uppercase;
        padding: 0;
    }

    & p {
        line-height: 150%;
        text-align: center;
    }

    & span,
    & p {
        color: var(--color-neutrals-600);
        text-align: center;
        width: 85%;
        margin: 0;
        font-weight: var(--font-weight-semi-bold);
    }

    & h1 {
        margin: 0;
        line-height: 80%;
        font-size: 6rem;
        font-weight: var(--font-weight-bold);
        padding-top: 0;
        
    }

    & h1:before {
        content: "TECH ";
        background: var(--color-brand-default);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & figure.hero {
        width: 400px;
        height: 400px;
        margin: 0;
        background: var(--illustrations-sprite) -85px 450px;
        margin-top: 3rem;
    }

    & .btn-text {
        color: white;
    }

  
    
    @media(min-width: 768px) {
        & h1 {
            width: 50%;
       }

       & span {
            width: 100%;
       }

       & p {
           width: 45%;
       }

       & .image {
            display: flex;
            align-items: center;
            justify-content: center;
        }
       
    }

    @media(min-width: 1200px) {
        & .container {
            max-width: 1464px;
            padding-top: 10rem;
            display: grid;
            grid-template: [row1-start] "span image" 5% [row1-end]
            [row2-start] "title image" 50% [row2-end]
            [row3-start] "p image" 15% [row3-end]
            [row4-start] "button image" 30% [row4-end]
            / 50% 50%;
            gap: 0;
            padding: 10rem 5rem 0 5rem;
        }

        & .gradient-bg {
            bottom: 5%;
            height: 20%;
            z-index: -1;
            mask-image: none;
        }


        & figure.hero {
            width: 573.3px;
	        height: 633.5px;
            background: var(--illustrations-sprite) -873px -899.5px;
            background-size: 1932px 1932px;
            margin: 0;
            grid-area: image;
        }

        & figure.hero::before {
            content: "";
            position: absolute;
            align-self: center;
            width: 490px;
	        height: 490px;
            background: var(--color-special-section-bg);
            z-index: -1;
            margin: 143.5px 41.65px 0 41.65px;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
            border-radius: 104px;
        }

        & .container span,
        & .container p {
            align-items: start;
            font-size: 1.125rem;
        }

        & .container h1 {
            grid-area: title;
            width: 100%;
            align-items: start;
            font-size: 9rem;
            padding: 0;
        }

        & .container p {
            grid-area: p;
            width: 80%;
            text-align: start;
            padding: 0;
        }

        & .container button {
            grid-area: button;
        }
    }
`