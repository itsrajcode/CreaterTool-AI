import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleChange = (_value: string) => {
    // do nothing
  };

  return (
    <div className="bg-white border shadow-lg rounded-lg">
      <div className="flex justify-between p-5 items-center">
        <h2 className="text-lg font-bold">Your Generated Content</h2>
        <Button className="flex gap-2" onClick={() => navigator.clipboard.writeText(aiOutput)}>
          {" "}
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={handleChange}
      />
    </div>
  );
}

export default OutputSection;

