import Placeholder from './Placeholder';
import { renderToString } from 'react-dom/server';
import Buttons from './Buttons.css';

function Button({ onClick }) {
  return (
    <div className='button-container'>
      <p className='button-text'>Try our data saver mode!</p>
      <input type="checkbox" id="switch" /><label htmlFor="switch" onClick={onClick}>Data Saver</label>
    </div>
  );
}

export default Button;