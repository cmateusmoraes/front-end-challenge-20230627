import Image from "next/image";
import styled from "styled-components";

import { device } from "@/styles/BreakPoints";
import { Text } from "@/components/Text";

export const SectionHero = styled.section`
  width: 100%;
  height: calc(100vh - 35.8rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bgColorSecondary);

  @media ${device.xs} {
    padding: 1rem 1.5rem;
  }
`;

export const WrapperText = styled.div`
  position: relative;
  margin-bottom: 1.3rem;
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
  margin-bottom: 5.8rem;

  strong {
    color: var(--primaryColor);
    display: block;
    font-size: 9rem;
  }

  @media ${device.sm} {
    font-size: 4rem;

    strong {
      font-size: 6rem;
    }
  }

  @media ${device.xs} {
    strong {
      font-size: 6rem;
    }
  }
`;

export const LeadsterDetail = styled(Image)`
  position: absolute;
  width: 7rem;
  height: 7rem;
  left: 50%;
  margin-left: 28.8rem;
  top: 10.8rem;

  @media ${device.sm} {
    margin-left: 18rem;
    top: 11.5rem;
  }

  @media ${device.xs} {
    top: 12rem;
  }
`;
