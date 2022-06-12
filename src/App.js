import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import VideoWidget from './components/VideoWidget';
import Text from './components/Text';
import Iframe from './components/Iframe';
import Image from './components/Image';
import Stats from './components/Stats';
import {BrowserRouter as Router, useSearchParams} from 'react-router-dom';

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [dataMode, setDataMode] = useState('');

  useEffect(() => {
    if (searchParams.get('data') === 'saver') {
      setDataMode('saver');
    } else if (searchParams.get('data') === 'full') {
      setDataMode('full');
    }
  }, [])

  const handleOnClick = () => {
    return dataMode === 'saver'
    ? (
      setDataMode('full'),
      setSearchParams({data: 'full'})
    )
    : dataMode === 'full'
      ? (
        setDataMode('saver'),
        setSearchParams({data: 'saver'})
      )
      : null;
  }

  return <div className="App">
    <Button onClick={handleOnClick}/>
    <div className="header">
      <Image mode={dataMode} src='https://i.pinimg.com/originals/1d/cc/8c/1dcc8c7b417d81904cd6aaf1bab1b80b.jpg' alt='sunset' width='100%' height='450' />
      <div className={`title ${dataMode === 'full' && 'title--full'}`}>
        <h1>What's the impact of you viewing this page?</h1>
        <h2>Scroll to find out!</h2>
      </div>
    </div>
    <div className='main-content'>
      <div className='media'>
        <div className={`media-item ${dataMode === 'full' && 'media-item--full'}`}>
          <Iframe alt='Youtube Video of the Muppets singing Bohemian Rapsody' id='iframe' width="420" height="315" mode={dataMode} src='https://www.youtube.com/embed/tgbNymZ7vqY'/>
        </div>
        <div className={`media-item ${dataMode === 'full' && 'media-item--full'}`}>
          <Image src="https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697__480.jpg" alt="the sea" width="420" height="280" mode={dataMode} />
        </div>
        <div className={`media-item ${dataMode === 'full' && 'media-item--full'}`}>
          <Iframe alt='Google Map to find CodeNode, 10 South Place EC2M 7EB' mode={dataMode} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.70421142993!2d-0.08820038392185657!3d51.518642379637036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cac6aabb2fb%3A0x91b283e2f67d1dbb!2sCodeNode!5e0!3m2!1sen!2suk!4v1654984648785!5m2!1sen!2suk" width="600" height="450" />
        </div>
      </div>
      <VideoWidget mode={dataMode}/>
      <Text mode={dataMode}/>
    </div>
    <Stats mode={dataMode}/>
  </div>
}

export default App;
