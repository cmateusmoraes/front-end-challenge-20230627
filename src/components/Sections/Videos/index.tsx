"use client";

import { Container } from "@/styles/Commom";

export function Videos() {
  return (
    <Container id="videos">
      <header>
        <nav>
          <ul>
            <li>Filter</li>
          </ul>
          <div>Select</div>
        </nav>
      </header>
      <div>
        <div>CardVideo</div>
      </div>
      <div>Pagination</div>
    </Container>
  );
}
