import styled from 'styled-components';
import { colors } from '../theme';

export const FlexItem = styled.div`
    flex: 0 0 50%;
    ${({ borderRight }: { borderRight?: boolean }) =>
        borderRight && `border-right: 1px solid ${colors.borderGray}`}
`;
