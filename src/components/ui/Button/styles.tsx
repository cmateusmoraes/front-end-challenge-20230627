import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

export const Button = styled.button`
  display: block;
  position: relative;
  overflow: hidden;
  padding: 2.5rem 4rem;
  background-color: var(--primaryColor);
  border-radius: 3.5rem;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 500;
  color: #ffffff;
  border: 1px solid var(--primaryColor);
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: -1px 4px 25px 0px rgba(0, 0, 0, 0.1);
    transform: scale(0.97);
    border: 1px solid var(--primaryColor);
  }

  @media ${device.sm} {
    padding: 1.5rem 3rem;
  }
`;
