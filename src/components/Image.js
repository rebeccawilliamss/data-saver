import Placeholder from './Placeholder';

function Image({ mode, alt, width, height, id, src }) {
  return mode === 'saver'
    ? <Placeholder width={width} height={height} text={alt}/>
    : <img alt={alt} width={width} height={height} id={id} src={src}/>
}

export default Image;