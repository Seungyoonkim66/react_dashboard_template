import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';

const StyledBox = styled.div` 
    background-color: ${palette.white};
    padding: 1rem;
    box-shadow: 0px 0px 8px ${palette.gray[5]};
    z-index: 1;
`;

const Header = () => {
    return(
        <StyledBox>
            header
        </StyledBox>
    );
}

export default Header;