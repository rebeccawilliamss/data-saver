import './Stats.css';
import { Fragment } from 'react';

function Stats({ mode }) {
  let classes = ['stats-container'];
  const isSaverMode = mode === 'saver';

  if (mode === 'full') {
    classes.push('bad');
  } else if (mode === 'saver') {
    classes.push('good');
  }

  const Usage = () => {
    let goodUse = '2.7MB';
    let goodTransfer = '497kb';

    let badUse = '9.3MB';
    let badTransfer = '588kb';

    return (
      <>
      {!isSaverMode
      ? <Fragment>
          <div className='perf'>
            <p>Resources usage: {badUse}</p>
            <p>Time to Interactive: 12.7s</p>
          </div>
          <div className='examples'>
            <p><span className='emphasise'>1g of CO2</span> emitted per load</p>
            <p>That is <span className='emphasise'>3,650g of CO2 a year</span> if we had just 10 visitors per day</p>
            <p>That is equivalent to driving a car for <span className='emphasise'>9.12 miles</span> 🚗🚗🚗🚗🚗🚗🚗🚗🚗</p>
          </div>
        </Fragment>
      : <Fragment>
          <div className='perf'>
            <p>Data Saver Resources usage: {goodUse} <span className='emphasise--green'>⬇️ 6.6MB</span></p>
            <div className='inline'>0<div className='bar'><span className='resources'></span></div>9.3MB</div>
            <p>Time to Interactive: 4.7s <span className='emphasise--green'>⬇️ 8s</span></p>
            <div className='inline'>0<div className='bar'><span className='interactive'></span></div>12.7s</div>
          </div>
          <div className='examples'>
            <p><span className='emphasise--green'>0.43g of CO2</span> emitted per load</p>
            <div className='inline'>0<div className='bar'><span className='carbon'></span></div>1g</div>
            <p>That is <span className='emphasise--green'>1569.5 of CO2 a year</span> if we had just 10 visitors per day</p>
            <p>That is equivalent to driving a car for <span className='emphasise--green'>4 miles</span> 🚗🚗🚗🚗</p>
          </div>
        </Fragment>
      }
      </>
    )
  }

  return (
    <>
    <div className={classes.join(' ')}>
      <div className='table'>
        <Usage/>
      </div>
    </div>
    </>
  );
}

export default Stats;