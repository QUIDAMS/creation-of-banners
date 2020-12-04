Приложение-редактор, для создания баннеров.
Баннер создаётся из формы, которую можно заполнить на странице и сериализовать в json. Получившийся баннер можно экспортировать картинкой, а также как разметку.
Приложение состоит из:
  1) Превью баннера
  2) Формы ввода параметров баннера
  3) 3 кнопок экспорта:
  4) сохранить картинку в png
  5)скопировать баннер в буфер обмена, как html 
  6)скопировать конфигурацию баннера в буфер обмена, как json строку
  
  
Баннер может:
  - иметь иллюстрацию (по ссылке или dataURI)
  - отображать не более 3 строк текста
  - иметь заливку цветом (color или gradient)
  - при клике на баннер можно перейти по заданной ссылке (в случае с выгружаемой разметкой)
Запускается локально (npm install && npm start). После запуска приложение должно быть доступно в браузере по адресу localhost:3999.
