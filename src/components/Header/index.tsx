import logoLeadster from "@/assets/img/leadster.svg";

import { Container, Logo } from "./styles.jsx";

export function Header() {
  return (
    <Container>
      <Logo src={logoLeadster} alt="Leadster" priority />
    </Container>
  );
}
