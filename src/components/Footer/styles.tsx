import Image from "next/image";
import styled from "styled-components";

export const Footer = styled.footer`
  padding: 5rem 0;
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;

  li {
    border-radius: 50%;
    width: 4.6rem;
    height: 4.6rem;
    background-color: #f7f8fb;
    margin: 0 0.5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Logo = styled(Image)`
  display: block;
  margin: 0 auto;
`;

export const WrapperSiteMap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0 8rem;
  border-bottom: 1px solid #d5d9dd;
`;

export const WrapperCol = styled.div`
  h3 {
    margin-bottom: 3.5rem;
  }

  li {
    a {
      text-decoration: none;
      line-height: 4rem;
      color: #848eab;
      transition: all 0.2s ease-out;

      &:hover {
        color: var(--primaryColor);
        text-decoration: underline;
      }
    }
  }
`;

export const WrapperCopy = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
