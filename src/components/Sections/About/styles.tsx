import Image from "next/image";
import styled from "styled-components";

import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { device } from "@/styles/BreakPoints";

export const SectionAbout = styled.section`
  background-color: var(--bgColorSecondary);
  padding: 10rem 0 0;
`;
export const WrapperAbout = styled(Container)`
  display: flex;
  max-width: 1800px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1820px) {
    max-width: 1400px;
  }

  @media ${device.xl} {
    max-width: 1140px;
  }

  @media ${device.md} {
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media ${device.sm} {
    max-width: calc(100vw - 5rem);
    padding-bottom: 6rem;
  }
`;

export const WrapperGraph = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media ${device.md} {
    width: 100%;
    margin-bottom: 5rem;
  }
`;

export const WrapperInfo = styled.div`
  width: 45%;

  p {
    line-height: 4.8rem;
  }

  @media ${device.md} {
    width: 100%;
  }
`;

export const WrapperCta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2.2rem 0;
  border-top: 1px solid #d5d9dd;

  button {
    margin-right: 2.5rem;
  }

  @media ${device.sm} {
    img {
      max-width: 45%;
      height: auto;
    }
  }
`;

export const WrapperDetails = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  i {
    font-style: normal;
    display: block;
    margin: 0 5px;
  }

  img {
    display: block;

    &:first-child {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin: 0 0.5rem;
    }
  }

  @media ${device.xl} {
    display: block;

    i {
      display: none;
    }

    img {
      display: inline-block;
    }
  }
`;
