import styled from 'styled-components';
import { colors } from '../theme';

export const FlexItem = styled.div`
    flex: 0 0 50%;
    padding: 25px;
    ${({ borderRight }: { borderRight?: boolean }) =>
        borderRight && `border-right: 1px solid ${colors.borderGray}`}
`;
