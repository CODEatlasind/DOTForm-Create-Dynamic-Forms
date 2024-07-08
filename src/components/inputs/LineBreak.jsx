import PropTypes from "prop-types";
export default function LineBreak({ id, type, onSubCompletion }) {
  return (
    <>
      <p>Add a Line-Break</p>
      <button
        key={"Submit" + Element.id}
        type="button"
        onClick={() => {
          onSubCompletion(id, type, {}, {});
        }}
        className="btn btn-add "
      >
        Add
      </button>
    </>
  );
}
LineBreak.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
