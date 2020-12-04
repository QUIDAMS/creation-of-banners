import React from 'react';
import PropTypes from 'prop-types';

function backgroundValue(banner) {
  if(banner.image) {
    return(`center/contain url("${banner.image}") no-repeat`);
  } else if (banner.color){
    return(banner.color);
  } else {
    return(`linear-gradient(${banner.topColorGradient}, ${banner.bottomColorGradient})`);
  }
}

const Preview = React.forwardRef(({banner}, ref) => {
  const divStyle = {
    background: backgroundValue(banner),
    position: 'relative',
    width: 250,
    height: 350,
    display: 'inline-block',
    border: '1px solid black',
    fontSize: 35,
    fontWeight: 'bold',
  }

  const textStyle = {
    position: 'absolute',
    left: 20,
    bottom: 5,
    margin: 0,
    color: 'black'
  }

  const paragraphStyle = {
    margin: 2,
  }

  return(
    <div className='preview'>
      <a
        href={banner.url}
        target='_blank'
        rel='noreferrer'
      >
        <div style={divStyle} ref={ref}>
          <div style={textStyle}>
            <p style={paragraphStyle} className='preview__text-line'>{banner.line1}</p>
            <p style={paragraphStyle} className='preview__text-line'>{banner.line2}</p>
            <p style={paragraphStyle} className='preview__text-line'>{banner.line3}</p>
          </div>
        </div>
      </a>
    </div>
  );
});

Preview.propTypes = {
  banner: PropTypes.object,
}

export default Preview;
