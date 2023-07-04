import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

export const WrapperSelect = styled.div`
  &::after {
    content: " ";
    position: absolute;
    top: 1.7rem;
    right: 1.5rem;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid var(--tertiaryColor);
    z-index: 10;

    @media ${device.sm} {
      top: unset;
      bottom: 1.75rem;
    }
  }
`;

export const Select = styled.select`
  display: block;
  position: relative;
  padding: 0.5rem 2.1rem;
  padding-right: 5rem;
  border: 1px solid var(--tertiaryColor);
  line-height: 3rem;
  border-radius: 10px;
  appearance: none;
  background-color: #ffffff;
  outline: none;
  width: 100%;
  font-size: 1.6rem;

  @media ${device.lg} {
    font-size: 1.5rem;
  }

  @media ${device.sm} {
    margin-top: 1rem;
    line-height: 3.5rem;
    font-size: 2rem;
  }

  @media ${device.xs} {
    font-size: 2.3rem;
  }

  @media ${device.xxs} {
    margin-top: 1rem;
    line-height: 4rem;
  }

  option {
    font-size: 1.6rem;
    font-family: var(--font-jakarta);
    line-height: 18px;

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
`;
