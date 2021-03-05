import styled from 'styled-components';
import palette from '../color/palette';

const StyledBox = styled.div`
    border-radius: 9px;
    background-color: rgba(255,255,255,1);
    margin: 1rem;
    padding: 2rem;
    box-shadow: 0px 0px 40px rgba(255,255,255,0.2);
    width: ${props => props.width || '500px'};
    height: ${props => props.height || '300px'};
    transition-duration: 0.2s;

    &:hover{
        box-shadow: 0px 0px 40px #bdbdbd;
        transition-duration: 0.2s;
    }
`;

function ChartContainer ({ children, width, height }){
    return (
        <StyledBox width={width} height={height}>{children}</StyledBox>
    );
}

export default ChartContainer;