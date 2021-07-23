import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../theme';
interface ListItemProps {
    name: string;
    onSelect(value: string): void;
}

const ListItem: FC<ListItemProps> = ({ name, onSelect }) => {
    return <StyledLi onClick={() => onSelect(name)}>{name}</StyledLi>;
};

export default ListItem;

const StyledLi = styled.li`
    padding: 10px 25px;
    border-top: 1px solid ${colors.borderGray};
    cursor: pointer;

    /* &:first-of-type {
        border-top: 2px solid ${colors.borderGray};
    } */
`;
