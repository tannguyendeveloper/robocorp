import styled from 'styled-components';

const Button = styled.button`
    border: none;
    padding: 8px 16px;
    border-radius: 2px;
    font-size: 1rem;
    font-family: 'Inter';
    cursor: pointer;
`
const PrimaryButton = styled(Button)`
    background-color: #7850FA;
    color: #ffffff;
    
    &:hover {
        box-shadow: rgba(56, 45, 114, 0.1) 0px 2px 4px, rgba(35, 26, 80, 0.1) 0px 1px 0px;
        background: linear-gradient(rgb(120, 80, 250) 0%, rgb(98, 65, 204) 100%);
    }
`
export const SecondaryButton = styled(Button)`
    background-color: #332933;
    color: #ffffff;
    
    &:hover {
        background: linear-gradient(180deg, rgba(51,41,51,1) 0%, rgba(46,36,46,1) 100%);
    }
`

export const TertiaryButton = styled(Button)`
    background: none;
    color: #b5acb5;
    
    &:hover {
        color: #ffffff;
    }
`

export default PrimaryButton;