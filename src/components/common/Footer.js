import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';

const StyledBox = styled.div`
    background: ${palette.white};
    padding: 1rem;
    font-size: 0.7rem;
    text-align: center;
    color: ${palette.gray[5]};
`;

const Footer = () => {
    return(
        <StyledBox>
            <p>© 2021. 삼정KPMG Lighthouse Co. all rights reserved.</p>
            <p>For more detail about the structure of the KPMG global organization please visit https://home.kpmg/governance.</p>

        </StyledBox>
    );
}

export default Footer;