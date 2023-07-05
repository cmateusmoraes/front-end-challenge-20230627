import Image from "next/image";
import styled from "styled-components";

import { device } from "@/styles/BreakPoints";
import { Text } from "@/components/ui/Text";

export const SectionHero = styled.section`
  width: 100%;
  height: calc(100vh - 37rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bgColorSecondary);
  opacity: 0;

  @media ${device.xs} {
    padding: 1rem 1.5rem;
  }

  @media ${device.sm} {
    height: 60rem;
  }
`;

export const WrapperText = styled.div`
  position: relative;
  margin-bottom: 1.3rem;

  p {
    @media ${device.sm} {
      max-width: calc(100vw - 5rem);
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Tag = styled.div`
  max-width: max-content;
  margin: 0 auto 1.2rem;
  padding: 0.7rem 1.6rem;
  border: 2px solid var(--primaryColor);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 1.5rem;

  @media ${device.xs} {
    padding: 1rem 1.5rem;
  }
`;

export const Title = styled(Text)`
  width: 100%;
  padding-bottom: 1.5rem;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  line-height: 7.2rem;

  strong {
    color: var(--primaryColor);
    display: block;
    font-size: 9rem;

    @media ${device.sm} {
      font-size: 6rem;
    }

    @media ${device.xs} {
      font-size: 6rem;
    }
  }

  @media ${device.sm} {
    font-size: 4rem;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #d5d9dd;
  margin-bottom: 2.4rem;
`;

export const LeadsterDetail = styled(Image)`
  position: absolute;
  width: 7rem;
  height: 7rem;
  left: 50%;
  margin-left: 28.8rem;
  top: 5.8rem;
  transform-origin: left bottom;

  @media ${device.sm} {
    margin-left: 18rem;
    top: 06.5rem;
  }

  @media ${device.xs} {
    top: 6rem;
  }
`;
