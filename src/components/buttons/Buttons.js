import React from 'react';
import {exportComponentAsPNG} from 'react-component-export-image';

function copyAsJSON(banner) {
  navigator.clipboard.writeText(JSON.stringify(banner));
}
function copyAsJSX(htmlString) {
  navigator.clipboard.writeText(htmlString);
}


const Buttons = ({banner, previewRef, htmlString}) => {
  return(
    <div>
      <button onClick={() => copyAsJSX(htmlString)}>
        Скопировать баннер в буфер обмена, как html
      </button>
      <button onClick={() => exportComponentAsPNG(previewRef)}>
        Сохранить картинку в png
      </button>
      <button onClick={() => copyAsJSON(banner)}>
        Скопировать баннер как JSON
      </button>
    </div>
  )
}

export default Buttons;
