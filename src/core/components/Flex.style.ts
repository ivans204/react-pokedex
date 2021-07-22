import styled from 'styled-components';

export interface FlexProps {
    flex?: number;
    flexStart?: boolean;
    flexEnd?: boolean;
    space?: boolean;
    grow?: number;
    column?: boolean;
    row?: boolean;
    justify?: string;
    align?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    ${({ row }) => row && `flex-direction: row;`}
    ${({ column }) => column && `flex-direction: column;`}
    ${({ justify }) => justify && `justify-content: ${justify};`} 
    ${({ align }) => align && `align-items: ${align};`}
`;
