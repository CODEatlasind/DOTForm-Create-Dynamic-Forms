export default function TeleOutput(id, typos, attr) {
  return (
    <div key={"Telephone" + id} className="">
      <label className="flex justify-center items-baseline gap-1">
        {typos.label != "" ? typos.label + " Ph No." : "Ph No."}
        <input
          type="tel"
          id={id}
          className="border-zinc-300 border-2 rounded"
        />
      </label>

      {typos.smallDescription && (
        <>
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
