import React from 'react';
import {exportComponentAsPNG} from 'react-component-export-image';
import PropTypes from 'prop-types';

function copyAsJSON(banner) {
  navigator.clipboard.writeText(JSON.stringify(banner));
}

function copyAsJSX(htmlString) {
  navigator.clipboard.writeText(htmlString);
}

const Buttons = ({banner, previewRef, htmlString}) => {
  return(
    <div className='buttons'>
      <button className='buttons__copy' onClick={() => copyAsJSX(htmlString)}>
        Скопировать баннер в буфер обмена, как html
      </button>
      <button className='buttons__copy' onClick={() => exportComponentAsPNG(previewRef)}>
        Сохранить картинку в png
      </button>
      <button className='buttons__copy' onClick={() => copyAsJSON(banner)}>
        Скопировать баннер как JSON
      </button>
    </div>
  )
}

Buttons.propTypes = {
  previewRef: PropTypes.object,
  banner: PropTypes.object,
  htmlString: PropTypes.string,
}

export default Buttons;
