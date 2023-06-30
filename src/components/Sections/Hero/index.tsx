"use client";

import { Text } from "@/components/Text";
import { SectionHero, WrapperText, Title, Tag, LeadsterDetail } from "./styles";

import imgDetailLeadster from "@/assets/img/leadster-logo.svg";

export function Hero() {
  return (
    <SectionHero>
      <WrapperText>
        <Tag>
          <Text
            fontSize="xxs"
            fontWeight="600"
            color="var(--primaryColor)"
            textAlign="center"
            lineHeight="1.4rem"
          >
            WEBINARS EXCLUSIVOS
          </Text>
        </Tag>
        <Title
          fontSize="lg"
          letterSpacing="-0.1rem"
          lineHeight="7.2rem"
          textAlign="center"
          as="h1"
        >
          Menos Conversinha,
          <strong>Mais Conversão</strong>
          <LeadsterDetail src={imgDetailLeadster} alt="Leadster" />
        </Title>
        <Text fontSize="sm" fontWeight="500" textAlign="center">
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio.
        </Text>
      </WrapperText>
    </SectionHero>
  );
}
