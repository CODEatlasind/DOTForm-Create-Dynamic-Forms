import { useState } from "react";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function SignatureInput() {
  const sigCanvas = useRef(null);
  const [savedImage, setSavedImage] = useState();

  const handleNew = () => {
    sigCanvas.current.clear();
    // sigCanvas.current.getSignaturePad();
  };
  const handleSave = () => {
    const dataURL = sigCanvas.current.getSignaturePad().toDataURL("image/png");
    // console.log(dataURL);
    setSavedImage(dataURL);
  };

  return (
    <div className="">
      <div className="border-double m-auto">
        <SignatureCanvas
          penColor="green"
          canvasProps={{
            width: 500,
            height: 200,
            className: "signature-Canvas bg-slate-50 rounded-md ",
          }}
          ref={sigCanvas}
        />
      </div>
      <div>
        <button onClick={handleNew}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
      <img src={savedImage}></img>
    </div>
  );
}
