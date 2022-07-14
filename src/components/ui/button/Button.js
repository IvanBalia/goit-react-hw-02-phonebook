import styled from "styled-components";

export const Button = styled.button`
color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primaryShade2};
`;