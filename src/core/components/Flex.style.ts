import styled from 'styled-components';

export interface FlexProps {
    column?: boolean;
    row?: boolean;
    justify?: string;
    align?: string;
    fwrap?: boolean;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    ${({ row }) => row && `flex-direction: row;`};
    ${({ column }) => column && `flex-direction: column;`};
    ${({ fwrap }) => fwrap && `flex-wrap: wrap;`};
    ${({ justify }) => justify && `justify-content: ${justify};`};
    ${({ align }) => align && `align-items: ${align};`};
`;
