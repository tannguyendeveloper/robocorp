import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-column-gap: 76px;
    grid-row-gap: 49px;
`
export const TwoColumnGrid = styled(Grid)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Cell = styled.div`
    box-sizing: border-box;
`
export const PrimaryCell = styled(Cell)`
    background: linear-gradient(180deg, rgba(120,80,250,1) 0%, rgba(99,66,205,1) 100%);
    color: #ffffff;
    padding: 36px 68px;
`
export const SecondaryCell = styled(Cell)`
    background-color: #221822;
    padding: 56px 48px;
    color: #ffffff;
`