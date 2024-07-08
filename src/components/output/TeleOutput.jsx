export default function TeleOutput(id, typos, attr) {
  return (
    <div
      key={"Telephone" + id}
      className="flex gap-2 justify-center items-center"
    >
      <label>{typos.label + " Ph No.: "}</label>

      <input type="tel" id={id} />

      <br />
      {typos.smallDescription && (
        <>
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
