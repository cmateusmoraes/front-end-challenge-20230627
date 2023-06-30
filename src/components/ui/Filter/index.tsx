import styled, { css } from "styled-components";
import { MouseEvent } from "react";

import { Filter } from "@/components/Sections/Videos/styles";
import { Text } from "@/components/ui/Text";

type FilterTagProps = {
  label: string;
  onClick: () => void;
};

export function FilterTag({ label, onClick }: FilterTagProps) {
  return (
    <Filter onClick={onClick}>
      <Text fontSize="xs" as="button">
        {label}
      </Text>
    </Filter>
  );
}
