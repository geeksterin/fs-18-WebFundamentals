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

  const handleGenerate = async () => {
    const result = Array.from(editor.getCurrentPageShapeIds());
    const data = await editor.getSvgString(result);
    console.log("Seleted Shapes", data);
    svgToPng(data.svg, data.height, data.width);
  };

  const svgToPng = (svg, height, width) => {
    // 1. Convert the SVG string to Image Object
    const img = new Image();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;

    img.onload = () => {
      // once the iamge is loaded successfully. We will create one canvas and inject this image in canvas.
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, width, height);

      // now the image is present on the canvas so we can export that image
      const pngUrl = canvas.toDataURL("image/png");
      console.log(pngUrl);
    };
  };

  return (
    <button onClick={handleGenerate} className="btn-my">
      Generate Code
    </button>
  );
}
