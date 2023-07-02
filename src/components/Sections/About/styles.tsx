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
`;

export const WrapperGraph = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const WrapperInfo = styled.div`
  width: 45%;

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

  button {
    margin-right: 2.5rem;
  }
`;

export const WrapperDetails = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    display: block;

    &:first-child {
      margin-right: 0.5rem;
    }

    &:last-child {
      margin: 0 0.5rem;
    }
  }
`;
