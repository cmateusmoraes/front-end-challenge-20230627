"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import { Text } from "@/components/UI/Text";
import { Container } from "@/components/UI/Container";

import imgArrow from "@/assets/img/arrow.svg";
import img404 from "@/assets/img/404.png";

export const Image404 = styled(Image)`
  width: 100%;
  max-width: 750px;
  height: auto;
  margin: 0 auto 30px;
`;

export const ImageArrow = styled(Image)`
  display: block;
  width: 2rem;
  height: 2rem;
  margin-left: 15px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--primaryColor);
`;

export default function NotFound() {
  return (
    <Container as="section">
      <Image404 src={img404} alt="404 - Essa página não existe :/" priority />
      <Text
        fontSize="lg"
        fontWeight="400"
        textAlign="center"
        as="h1"
        margin="2.5rem 0"
      >
        404 - Essa página não existe :/
      </Text>
      <Text fontSize="xs" fontWeight="500" textAlign="center">
        Desculpe pela inconveniência mas algum erro ocorreu, tente novamente ou
        entre em contato conosco.
      </Text>
      <BackLink href="/">
        Voltar para página Inicial
        <ImageArrow src={imgArrow} alt="Voltar para home" />
      </BackLink>
    </Container>
  );
}
