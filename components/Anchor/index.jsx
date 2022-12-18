const Anchor = ({ name = '' }) => {
  return (
    <div style={{ position: 'relative', top: '-50px' }}>
      <a name={name}> </a>
    </div>
  );
};

export default Anchor;
