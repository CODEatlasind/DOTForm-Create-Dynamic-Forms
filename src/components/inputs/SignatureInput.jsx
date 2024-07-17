import { useEffect, useState } from "react";

import SignatureCanvas from "react-signature-canvas";
import PropTypes from "prop-types";

export default function SignatureInput({ onSignature }) {
  const [sigCanvas, setSigCanvas] = useState();
  const [savedImage, setSavedImage] = useState();
  const handleNew = () => {
    sigCanvas.clear();
  };
  useEffect(() => {
    onSignature(savedImage);
  }, [savedImage, onSignature]);
  const handleSave = async () => {
    const dataURL = sigCanvas.getTrimmedCanvas().toDataURL("image/png");
    setSavedImage(dataURL);
    // console.log(dataURL);
  };

  return (
    <>
      <section className="border-dashed border-2 border-gray-900 ">
        <SignatureCanvas
          penColor="blue"
          canvasProps={{
            width: 400,
            height: 200,
            className: "signature-Canvas bg-slate-50 rounded-md ",
          }}
          ref={(ref) => {
            setSigCanvas(ref);
          }}
        />
        <div className="text-center">
          <button onClick={handleNew}>Clear</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </section>
    </>
  );
}
SignatureInput.propTypes = {
  onSignature: PropTypes.func.isRequired,
};
