import React from 'react';

const Preview = ({banner}) => {
  const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + banner + ')',
    backgroundColor: 'blue',
    position: 'relative',
    background: `linear-gradient( ${banner.topColorGradient}, ${banner.bottomColorGradient})`,
    width: 350,
    height: 250,
  };
  const textStyle = {
    position: 'absolute',
    left: 20,
    bottom: 5,
    margin: 0,
    color: banner.color,
  }
  return(
    <React.Fragment>
      <a href={banner.url}>
        <div style={divStyle}>
          <div style={textStyle}>
            <p>{banner.line1}</p>
            <p>{banner.line2}</p>
            <p>{banner.line3}</p>
          </div>
        </div>
      </a>
    </React.Fragment>
  )
}

export default Preview;
