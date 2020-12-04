import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({banner, enterInformationForBanner}) => {
  return(
    <div className='editor'>
      <div className='editor__list'>
        <div className='editor__item'>
          <label className='editor__label' id='1'>Иллюстрация</label>
          <input type='text'
            name='1'
            value={banner.image}
            onChange={e => enterInformationForBanner(e, 'image')}/>
        </div>
        <div className='editor__item'>
          <label className='editor__label'>Строка 1</label>
          <input type='text'
            value={banner.line1}
            onChange={e => enterInformationForBanner(e, 'line1')}/>
        </div>
        <div className='editor__item'>
          <label className='editor__label'>Строка 2</label>
          <input type='text'
            value={banner.line2}
            onChange={e => enterInformationForBanner(e, 'line2')}/>
        </div>
        <div className='editor__item'>
          <label className='editor__label'>Строка 3</label>
          <input type='text'
            value={banner.line3}
            onChange={e => enterInformationForBanner(e, 'line3')}/>
        </div>
        <div className='editor__item'>
        <label className='editor__label'>Ссылка</label>
        <input type='text'
        value={banner.url}
        onChange={e => enterInformationForBanner(e, 'url')}/>
        </div>
        <div className='editor__item'>
          <label className='editor__label'>Цвет фона</label>
          <input type='text'
            value={banner.color}
            onChange={e => enterInformationForBanner(e, 'color')}/>
        </div>
        <div className='editor__item'>
          <label className='editor__label'>Градиент цвет 1</label>
          <input type='color'
            value={banner.topColorGradient}
            onChange={e => enterInformationForBanner(e, 'topColorGradient')}/>
        </div>
        <div className='editor__item'>
          <label className='editor__label'>Градиент цвет 2</label>
          <input type='color'
            value={banner.bottomColorGradient}
            onChange={e => enterInformationForBanner(e, 'bottomColorGradient')}/>
        </div>
      </div>
    </div>
  );
}

Editor.propTypes = {
  banner: PropTypes.object,
  enterInformationForBanner: PropTypes.func,
};

export default Editor;
