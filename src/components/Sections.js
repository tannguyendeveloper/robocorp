import styled from 'styled-components';

const Section = styled.section`
    display: block;
    overflow: auto;
    text-align: left;
`
export const WhiteSection = styled(Section)`
    background-color: #fff;
`

export const LightSection = styled(Section)`
    background-color: #f2f0ed;
`

export const MediumDarkSection = styled(Section)`
    background-color: #190f19;
    color: #ffffff;
`

export const DarkSection = styled(Section)`
    background-color: #191219;
    color: #ffffff;
`
export const DarkGradientSection = styled(Section)`
    background: linear-gradient(180deg, rgba(34,24,34,1) 0%, rgba(18,9,18,1) 100%);
    color: #ffffff;
`
export const Footer = styled(DarkSection)`
    color: #ffffff;
`