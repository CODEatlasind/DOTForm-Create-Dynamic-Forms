export default function TeleOutput(id, typos, attr) {
  return (
    <div key={"Telephone" + id} className="">
      <label>{typos.label + " Ph No.: "}</label>

      <input type="tel" id={id} className="border-zinc-300 border-2 rounded" />
      <br />
      {typos.smallDescription && (
        <>
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
