import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

type filterProp = {
  active?: boolean;
};

export const Filter = styled.li<filterProp>`
  position: relative;
  overflow: hidden;
  padding: 0.4rem 2.1rem;
  border-radius: 2.5rem;
  border: 0.1px solid var(--tertiaryColor);
  margin: 0 0.5rem;
  transition: all 0.15s ease-out;
  border-color: ${props =>
    props.active ? "var(--primaryColor)" : "var(--tertiaryColor)"};

  @media ${device.lg} {
    padding: 0.4rem 1.2rem;
  }

  @media ${device.md} {
    padding: 0.4rem 1.6rem;
  }

  @media ${device.sm} {
    text-align: center;
  }

  &::before {
    content: " ";
    position: absolute;
    background-color: var(--primaryColor);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform-origin: center center;
    top: calc(50% - 0.5rem);
    right: 0;
    bottom: 0;
    left: calc(50% - 0.5rem);
    transform: ${props => (props.active ? "scale(20)" : "scale(0)")};
    transition: all 0.25s ease-out;

    @media ${device.sm} {
      transform: ${props => (props.active ? "scale(30)" : "scale(0)")};
    }
  }

  button {
    position: relative;
    padding: 0.8rem 0;
    color: ${props => (props.active ? "#FFFFFF" : "var(--tertiaryColor)")};
    transition: all 0.25s ease-out;

    @media ${device.lg} {
      font-size: 1.5rem;
    }

    @media ${device.sm} {
      font-size: 2rem;
    }

    @media ${device.xs} {
      font-size: 2.3rem;
    }
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--primaryColor);

      button {
        color: ${props => (props.active ? "#FFFFFF" : "var(--primaryColor)")};
      }
    }
  }
`;
