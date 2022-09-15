import { Description, Paragraph, Subtitle, Title } from "@/styled-components/typography.styled.component";
import type { FC } from "react";

interface ITypographyProps {
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
}

const Typography: FC<ITypographyProps> = ({ text, component }) => {
  return (
    <>
      {component === "h1" && <Title>{text}</Title>}
      {component === "h2" && <Subtitle>{text}</Subtitle>}
    </>
  );
};

export default Typography;
