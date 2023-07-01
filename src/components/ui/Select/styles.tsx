import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

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
