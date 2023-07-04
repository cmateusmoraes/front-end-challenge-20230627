import styled from "styled-components";

import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { device } from "@/styles/BreakPoints";

export const SectionAbout = styled.section`
  background-color: var(--bgColorSecondary);
  padding: 10rem 0 4rem;
  overflow-x: hidden;
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
    padding-bottom: 5rem;
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

  @media ${device.md} {
    width: 100%;
  }

  @media ${device.xs} {
    padding-left: 2rem;
  }

  h2 {
    @media ${device.xs} {
      font-size: 4.1rem;
      line-height: 4.8rem;
    }

    @media (max-width: 390px) {
      font-size: 3.6rem;
    }

    @media ${device.xs} {
      font-size: 4.3rem;
      line-height: 4.8rem;
    }
  }

  p {
    line-height: 4.8rem;
  }
`;

export const WrapperCta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2.2rem 0;
  border-top: 1px solid #d5d9dd;

  @media ${device.sm} {
    display: block;
  }

  button {
    margin-right: 2.5rem;

    @media ${device.sm} {
      padding: 2.5rem 0;
      width: 100%;
      margin: 0 auto 2rem;
      font-size: 2.2rem;
    }
  }

  img {
    @media ${device.sm} {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }
`;

export const WrapperDetails = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.xl} {
    display: block;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media ${device.sm} {
      justify-content: center;
    }
  }

  i {
    font-style: normal;
    display: block;
    margin: 0 5px;

    @media ${device.xl} {
      display: none;
    }
  }

  img {
    display: block;

    &:first-child {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin: 0 0.5rem;
    }

    @media ${device.xl} {
      display: inline-block;
    }
  }
`;
