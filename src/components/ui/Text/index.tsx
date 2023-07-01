import styled, { css } from "styled-components";

import { device } from "@/styles/BreakPoints";

type TextProps = {
  color?: string | "var(--tertiaryColor)";
  fontSize: "xxs" | "xs" | "sm" | "md" | "lg" | string;
  fontWeight?: "bold" | string;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  textAlign?: "left" | "center" | "right";
  margin?: string;
};

export const Text = styled.p<TextProps>`
  color: ${props => props.color ?? "var(--tertiaryColor)"};
  text-align: ${props => props.textAlign ?? "left"};
  font-weight: ${props => props.fontWeight ?? "normal"};
  line-height: ${props => props.lineHeight ?? "3rem"};
  letter-spacing: ${props => props.letterSpacing ?? "0"};
  margin: ${props => props.margin ?? props.margin};
  ${props => {
    switch (props.fontSize) {
      case "xxs":
        return css`
          font-size: 1.4rem;

          @media ${device.xs} {
            font-size: 1.8rem;
          }
        `;
      case "xs":
        return css`
          font-size: 1.6rem;
        `;
      case "sm":
        return css`
          font-size: 1.8rem;
          @media ${device.sm} {
            font-size: 2.2rem;
          }
          @media ${device.xs} {
            font-size: 2.4rem;
          }
        `;
      case "md":
        return css`
          font-size: 3.2rem;
        `;
      case "lg":
        return css`
          font-size: 5rem;
        `;
      default:
        return css`
          font-size: ${props.fontSize};
        `;
    }
  }}

  @media ${device.md} {
    max-width: calc(100vw - 6rem);
    margin-left: auto;
    margin-right: auto;
  }
`;
