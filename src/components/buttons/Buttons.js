import React from 'react';
import {exportComponentAsPNG} from 'react-component-export-image';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function copyAsJSON(banner) {
  navigator.clipboard.writeText(JSON.stringify(banner));
}

const Buttons = ({banner, previewRef}) => {
  return(
    <div>
      <button onClick={() => exportComponentAsPNG(previewRef)}>
        export Component As PNG
      </button>
      <button onClick={() => copyAsJSON(banner)}>
        Скопировать как JSON
      </button>
    </div>
  )
}

export default Buttons;
