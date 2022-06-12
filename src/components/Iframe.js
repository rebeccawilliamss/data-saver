import Placeholder from './Placeholder';

function Iframe({ mode, alt, width, height, id, src }) {
  return mode === 'saver'
    ? <Placeholder width={width} height={height} text={alt}/>
    : <iframe alt={alt} width={width} height={height} id={id} src={src}/>
}

export default Iframe;