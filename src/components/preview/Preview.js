import React from 'react';

function backgroundValue(banner) {
  if(banner.image) {
    return(`url("${banner.image}") no-repeat`);
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
    <div className='preview'>
      <a
        href={banner.url}
        target='_blank'
        rel='noreferrer'
      >
        <div style={divStyle} ref={ref}>
          <div style={textStyle}>
            <p className='preview__text-line'>{banner.line1}</p>
            <p className='preview__text-line'>{banner.line2}</p>
            <p className='preview__text-line'>{banner.line3}</p>
          </div>
        </div>
      </a>
    </div>
  );
});

export default Preview;
