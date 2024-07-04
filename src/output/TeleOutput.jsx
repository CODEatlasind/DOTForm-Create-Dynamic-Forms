export default function TeleOutput(id, typos, attr) {
  return (
    <div key="Telephone">
      <label>{typos.label + " Phone No.:"}</label>
      <input type="tel" id={id} />
      {typos.smallDescription && (
        <>
          <br />
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
