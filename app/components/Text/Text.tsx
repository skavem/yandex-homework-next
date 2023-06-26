import React from "react";

const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
};

const Text = ({
  children,
  element,
  className,
  style,
}: React.PropsWithChildren<{
  element?: keyof typeof defaultVariantMapping;
  className?: string;
  style?: React.CSSProperties;
}>) => {
  return React.createElement(
    defaultVariantMapping[element || "body1"],
    { className, style },
    children
  );
};

export default Text;
