import React from 'react';

function copyAsJSON(banner) {
  navigator.clipboard.writeText(JSON.stringify(banner));
}

const Buttons = ({banner}) => {
  return(
    <div>
      <button onClick={() => copyAsJSON(banner)}>
        Скопировать как JSON
      </button>
    </div>
  )
}

export default Buttons;
