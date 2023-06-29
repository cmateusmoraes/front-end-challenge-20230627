import styled from "styled-components";

import { device } from "@/styles/BreakPoints";
import { Text } from "@/components/Text";

export const SectionHero = styled.section`
  width: 100%;
  height: calc(100vh - 26rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bgColorSecondary);

  @media ${device.xs} {
    padding: 1rem 1.5rem;
  }
`;

export const WrapperText = styled.div`
  margin-bottom: 1.3rem;
`;

export const Tag = styled.div`
  max-width: max-content;
  margin: 0 auto 1.2rem;
  padding: 0.7rem 1.3rem;
  border: 2px solid var(--primaryColor);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 1.5rem;

  @media ${device.xs} {
    padding: 1rem 1.5rem;
  }
`;

// export const TagText = styled(Text)`
// `:

export const Title = styled(Text)`
  width: 100%;
  margin-bottom: 5.8rem;

  strong {
    display: block;
    font-size: 9rem;
  }
`;
