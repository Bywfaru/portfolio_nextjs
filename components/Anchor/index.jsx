const Anchor = ({ name = "" }) => {
  return (
    <div style={{ position: "relative", top: "-5rem" }}>
      <a name={name}></a>
    </div>
  );
};

export default Anchor;
