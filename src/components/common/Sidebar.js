import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/color/palette';
import NavButton from './NavButton';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
import TransformSharpIcon from '@material-ui/icons/TransformSharp';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';

const StyledBox = styled.div` 
    background-color: ${palette.white};
    box-shadow: 2px 0px 4px ${palette.gray[3]};
    height: 100%;
    width: 80px;
    position: fixed;
    z-index: 999;
`;

const navItems = [
    { name: 'SR value', link: '/sr', icon: <AssessmentSharpIcon /> },
    { name: 'Libor', link: '/libor', icon: <TransformSharpIcon /> },
    { name: '', link: '/home', icon: <MoreVertSharpIcon /> },
];

const Sidebar = () => {
    return(
        <StyledBox>
            {navItems.map((item, i) => <NavButton key={i} item={item} />)}
        </StyledBox>
    );
}

export default React.memo(Sidebar);