import './Text.css';

function Text({ mode }) {
  return (
    <div className={`text ${mode === 'full' && 'text--full'}`}>
      <h1>Some Text</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam vulputate blandit erat, id lacinia tortor. Nulla id leo felis.
        Cras posuere, urna quis efficitur commodo, mi sapien aliquam mauris,
        eget porttitor odio lorem non elit. Integer in imperdiet turpis.
        Nulla efficitur at enim in scelerisque. Vivamus vehicula lobortis sollicitudin.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam nisl lacus, fringilla ut condimentum sit amet, finibus eu augue.
        Sed id sem pulvinar, molestie erat sit amet, faucibus neques pellentesque convallis.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam vulputate blandit erat, id lacinia tortor. Nulla id leo felis.
        Cras posuere, urna quis efficitur commodo, mi sapien aliquam mauris,
        eget porttitor odio lorem non elit. Integer in imperdiet turpis.
        Nulla efficitur at enim in scelerisque. Vivamus vehicula lobortis sollicitudin.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aliquam nisl lacus, fringilla ut condimentum sit amet, finibus eu augue.
        Sed id sem pulvinar, molestie erat sit amet, faucibus neques pellentesque convallis.</p>
    </div>
  )
}

export default Text;