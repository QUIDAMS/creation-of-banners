import React from 'react';

const Editor = ({banner, enterInformationForBanner}) => {
  return(
    <ul>
     <li>Иллюстрация
       <input
         value={banner.image}
         onChange={e => enterInformationForBanner(e, 'image')}/>
     </li>
     <li>Строка 1
       <input
         value={banner.line1}
         onChange={e => enterInformationForBanner(e, 'line1')}/>
     </li>
     <li>Строка 2
       <input
         value={banner.line2}
         onChange={e => enterInformationForBanner(e, 'line2')}/>
     </li>
     <li>Строка 3
       <input
         value={banner.line3}
         onChange={e => enterInformationForBanner(e, 'line3')}/>
     </li>
     <li>Цвет текста
       <input
         value={banner.color}
         onChange={e => enterInformationForBanner(e, 'line3')}/>
     </li>
     <li>Градиент цвет 1
       <input
         value={banner.topColorGradient}
         onChange={e => enterInformationForBanner(e, 'topColorGradient')}/>
     </li>
     <li>Градиент цвет 2
       <input
         value={banner.bottomColorGradient}
         onChange={e => enterInformationForBanner(e, 'bottomColorGradient')}/>
     </li>
     <li>Ссылка
       <input
         value={banner.url}
         onChange={e => enterInformationForBanner(e, 'url')}/>
     </li>
   </ul>

  )
}

export default Editor;
