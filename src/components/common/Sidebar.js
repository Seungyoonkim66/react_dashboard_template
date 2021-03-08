import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';

const StyledBox = styled.div` 
    background-color: ${palette.white};
    padding: 1rem;
    box-shadow: 0px 0px 8px ${palette.gray[2]};
    height: 100%;
    width: 150px;
    position: fixed;
`;

const Sidebar = () => {
    return(
        <StyledBox>
        </StyledBox>
    );
}

export default Sidebar;