import React from "react";

export function VerticalStories(Story) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%"
      }}
    >
      <Story />
    </div>
  );
}
