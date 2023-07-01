import styled from "styled-components";

export const Button = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  padding: 2.8rem 4rem;
  background-color: var(--primaryColor);
  border-radius: 3.5rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 500;
  color: #ffffff;
  transition: all 0.15s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;
