import styled,   {css} from 'styled-components'
import { Link } from 'react-router-dom';


export const optioncontainerstyles = css`
    padding: 10px 15px;

    @media screen and (max-width: 800px){
        padding: 8px;

    }
    `

export const HeaderContainer = styled.div`
    height:70px ;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px; 
    padding: 10px; 

    @media screen and (max-width: 800px){
        padding: 8px 0;
        align-items: center;
    }
    `
    ;

    export const HomeContainer = styled(Link)`
    padding: 15px;

    `

    export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: flex-end;
    font-size: 1rem;
    cursor: pointer;

    @media screen and (max-width: 800px){
        width: 54%;    }
    `

    export const OptionLink = styled(Link)`
    ${optioncontainerstyles}
    `
    export const OptionDiv = styled.div`
    ${optioncontainerstyles}
    `