import { Tldraw, useEditor } from "tldraw";
import "../index.css";
import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function DrawingTool() {
  const [result, setResult] = useState("");
  const [modalOpen, setModalopen] = useState(false);

  return (
    <div>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw>
          <ChildOfTldraw setResult={setResult} setModalopen={setModalopen} />
        </Tldraw>
      </div>
      <div>
        <Modal
          isOpen={modalOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1>Here is your Code! Thanks for using us.</h1>
          <button onClick={() => setModalopen(false)}>Close </button>
          <pre>{result}</pre>
        </Modal>
      </div>
    </div>
  );
}

function ChildOfTldraw({ setResult, setModalopen }) {
  const editor = useEditor();

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
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
      imageToHtml(pngUrl);
    };
  };

  const imageToHtml = (imgurl) => {
    console.log("Sending to api", imgurl);
    const systemPrompt = `You are an expert tailwind developer. A user will provide you with a
 low-fidelity wireframe of an application and you will return 
 a single html file that uses tailwind to create the website. Use creative license to make the application more fleshed out.
if you need to insert an image, use placehold.co to create a placeholder image. Respond only with the html file.`;

    const apiKey = "your api key";
    const url = "https://api.openai.com/v1/chat/completions";

    const requestBody = {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: imgurl },
            },
            {
              type: "text",
              text: "Turn this into a single html file using tailwind.",
            },
          ],
        },
      ],
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        let html = data.choices[0].message.content;
        setResult(html);
        setModalopen(true);
      })
      .catch((error) => setLoading(false));
  };

  return (
    <button
      disabled={loading == true}
      onClick={handleGenerate}
      className="btn-my"
    >
      {loading == true ? "Please Wait..." : "Generate Code"}
    </button>
  );
}
