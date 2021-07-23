import styled from 'styled-components';

export interface FlexProps {
    column?: boolean;
    row?: boolean;
    justify?: string;
    align?: string;
    wrap?: boolean;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    ${({ row }) => row && `flex-direction: row;`}
    ${({ column }) => column && `flex-direction: column;`}
    ${({ wrap }) => wrap && `flex-wrap: wrap;`}
    ${({ justify }) => justify && `justify-content: ${justify};`} 
    ${({ align }) => align && `align-items: ${align};`}
`;
