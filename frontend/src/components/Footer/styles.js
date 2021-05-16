import styled from 'styled-components';

export const FooterBase = styled.footer`
width: 100%;
height: 10rem;
background-color: var(  --menu-bg-color);
bottom: 0;
position: absolute;

.footerNav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.links{
    margin-top: 3rem;
    margin-left: 5rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
}


.links ul {
    list-style-type: none;
}

:hover .links {
    
}

.socialMedia {
    display: flex;
    aling-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    margin-right: 3rem;
}

.socialMedia a {
    margin-right: 2rem;
}

.socialMedia p {
    margin-right: 2rem;
    font-size: 34px;
}

@media (max-width: 600px){
    margin-bottom: 0;
}
`;


