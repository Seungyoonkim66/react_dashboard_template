import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    color: red;
    font-size: 100px;
`;

function Title({ children }){
    return <StyledTitle>{children}dldldl</StyledTitle>;
}

export default Title;