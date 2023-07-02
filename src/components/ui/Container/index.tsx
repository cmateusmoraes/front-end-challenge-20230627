import styled from "styled-components";

import { device } from "@/styles/BreakPoints";

type ContainerProps = {
  bgBlue?: boolean;
};

export const Container = styled.section<ContainerProps>`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  background-color: ${props =>
    props.bgBlue ? "var(--bgColorSecondary)" : "var(--bgColorPrimary)"};

  @media ${device.lg} {
    max-width: 970px;
  }

  @media ${device.md} {
    max-width: calc(100vw - 30px);
    margin: 0 auto;
  }
`;
