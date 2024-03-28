import { useRef, useState } from "@storybook/preview-api";
import * as VibeComponents from "./components";
import * as VibeComponentsNext from "./next";
import * as VibeIcons from "./components/Icon/Icons";
import Editor from "./Editor";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { langs } from "@uiw/codemirror-extensions-langs";
import { createPortal } from "react-dom";
import { LivePreview, LiveProvider } from "react-live";

const scope = { ...VibeComponents, VibeIcons, VibeNext: VibeComponentsNext };

// @ts-ignore
const LiveEditDecorator = (Story, { id, parameters, viewMode }) => {
  const originalCode = useRef(extract(parameters.docs.source?.originalSource) || "");
  const [code, setCode] = useState<string>(originalCode.current);
  const [dirty, setDirty] = useState<boolean>(false);

  const handleChange = (newVal: string) => {
    setCode(newVal);
    setDirty(true);
  };

  return (
    <>
      {dirty ? (
        <LiveProvider code={code} scope={scope} enableTypeScript>
          <LivePreview />
        </LiveProvider>
      ) : (
        <Story />
      )}
      {viewMode === "docs" &&
        createPortal(
          <Editor
            placeholder={"Insert code here"}
            code={code}
            theme={vscodeDark}
            extensions={[langs.tsx()]}
            style={{ fontSize: 13 }}
            onChange={handleChange}
            setup={{
              lineNumbers: false,
              foldGutter: false,
              highlightActiveLine: false
            }}
          />,
          document.getElementById(id) || document.body
        )}
    </>
  );
};

function extract(string: string): string {
  // Regular expression to match everything after "render:" up to ",\n name"
  const match = string.match(/render:\s*(?:\(\)\s*=>\s*)?([\s\S]*?)(?=\s*,\s*\n\s*name)/);

  if (!match?.[1]) {
    return "";
  }

  return match[1].trim();
}

export default LiveEditDecorator;
