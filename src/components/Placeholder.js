import './Placeholder.css';

function Placeholder({ text, height, width }) {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className='placeholder' style={styles}>Media showing {text}</div>
  );
}

export default Placeholder;