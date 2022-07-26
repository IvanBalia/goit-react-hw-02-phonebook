import styled from "styled-components";

export const DeleteButton = styled.button`
margin:0 30px;
padding:5px;
font-size:16px;
background-color:${({ theme }) => theme.colors.tertiary};
color:${({ theme }) => theme.colors.secondary};
border-radius:5px;

`