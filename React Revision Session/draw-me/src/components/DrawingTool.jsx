import { Tldraw, useEditor } from "tldraw";
import "../index.css";

export default function DrawingTool() {
  return (
    <div>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw>
          <ChildOfTldraw />
        </Tldraw>
      </div>
    </div>
  );
}

function ChildOfTldraw() {
  const editor = useEditor();

  const handleGenerate = () => {
    const result = editor.getCurrentPageShapeIds();
    console.log("Seleted Shapes", result);
  };
  return (
    <button
      onClick={handleGenerate}
      style={{ position: "fixed", top: "10px", left: "20px", zIndex: "1000" }}
    >
      Generate Code
    </button>
  );
}
