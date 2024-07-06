export default function HeadingOut(id, typos) {
  return (
    <div key={"Heading" + id}>
      <h2 id={id}>{typos.label}</h2>
    </div>
    //  !contentEditable="true" suppressContentEditableWarning="true"
  );
}
