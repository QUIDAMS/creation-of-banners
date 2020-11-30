import React from 'react';

function backgroundValue(banner) {
  if(banner.image) {
    return(`url("${banner.image}") no-repeat`);
  } else if (banner.topColorGradient && banner.bottomColorGradient) {
    return(`linear-gradient(${banner.topColorGradient}, ${banner.bottomColorGradient})`);
  } else {
    return(banner.color);
  }
}

const Preview = ({banner}) => {
  const divStyle = {
    background: backgroundValue(banner),
    position: 'relative',
    width: 350,
    height: 250,
    display: 'inline-block'
  }

  const textStyle = {
    position: 'absolute',
    left: 20,
    bottom: 5,
    margin: 0,
    color: 'black'
  }

  return(
    <React.Fragment>
      <a href={banner.url} target="_blank" rel="noreferrer">
        <div style={divStyle}>
          <div style={textStyle}>
            <p>{banner.line1}</p>
            <p>{banner.line2}</p>
            <p>{banner.line3}</p>
          </div>
        </div>
      </a>
    </React.Fragment>
  );
}

export default Preview;
