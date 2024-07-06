import { useState } from "react";
// import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function SignatureInput() {
  const [sigCanvas, setSigCanvas] = useState();
  const [savedImage, setSavedImage] = useState();

  const handleNew = () => {
    sigCanvas.clear();
    // sigCanvas.current.getSignaturePad();
  };
  const handleSave = () => {
    const dataURL = sigCanvas.getTrimmedCanvas().toDataURL("image/png");
    // console.log(dataURL);
    setSavedImage(dataURL);
  };

  return (
    <>
      <section className="border-dashed border-2 border-gray-900 ">
        <SignatureCanvas
          penColor="green"
          canvasProps={{
            width: 500,
            height: 200,
            className: "signature-Canvas bg-slate-50 rounded-md ",
          }}
          ref={(ref) => {
            setSigCanvas(ref);
          }}
        />

        <button onClick={handleNew}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </section>
      <section>
        <img src={savedImage}></img>
      </section>
    </>
  );
}
