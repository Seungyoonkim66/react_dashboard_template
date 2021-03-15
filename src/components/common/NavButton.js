import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import KPMGColor from '../../lib/color/KPMGColor';
import Tooltip from '@material-ui/core/Tooltip';

const StyledBox = styled.div`
    width: 80px;
    color: ${KPMGColor.primary[2]};
    height: 60px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        box-shadow: 0px 2px 3px #bbb;
    }
`;

const NavButton = ({ item }) => {
    const { name, link, icon } = item
    return (
        <NavLink to={link}>
            <Tooltip title={name} placement="left">
                <StyledBox>
                    {icon}
                </StyledBox>
            </Tooltip>
        </NavLink>
    );
}

export default React.memo(NavButton);