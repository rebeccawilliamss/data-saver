import { useState, useEffect, Fragment } from "react";
import './VideoWidget.css';
import Placeholder from './Placeholder';

function VideoWidget({ mode }) {
  useEffect(() => {
    const url = "https://apps.elfsight.com/p/platform.js";
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    if(mode === 'full') {
      document.body.appendChild(script);
    }

    return () => {
      if (mode === 'full') {
        document.body.removeChild(script);
      }
    }
  }, [mode]);

  return <div className={`widget-container ${mode === 'full' && 'widget-container--full'}`}>
    {mode === 'saver'
    ? <Placeholder text={'External Video Widget'}/>
    : <Fragment>
      <h2>Carousel of Videos</h2>
      <div className="elfsight-app-0b1a6c97-bfc7-4bfc-9510-9795bf1b2334"/>
    </Fragment>}
  </div>;
}

export default VideoWidget;