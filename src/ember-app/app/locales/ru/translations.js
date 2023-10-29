import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISClass10ГородLForm from './forms/i-i-s-class10-город-l';
import IISClass10ДомLForm from './forms/i-i-s-class10-дом-l';
import IISClass10КомнатаLForm from './forms/i-i-s-class10-комната-l';
import IISClass10УлицаLForm from './forms/i-i-s-class10-улица-l';
import IISClass10ГородEForm from './forms/i-i-s-class10-город-e';
import IISClass10ДомEForm from './forms/i-i-s-class10-дом-e';
import IISClass10КомнатаEForm from './forms/i-i-s-class10-комната-e';
import IISClass10УлицаEForm from './forms/i-i-s-class10-улица-e';
import IISClass10ГородModel from './models/i-i-s-class10-город';
import IISClass10ДомModel from './models/i-i-s-class10-дом';
import IISClass10КомнатаModel from './models/i-i-s-class10-комната';
import IISClass10УлицаModel from './models/i-i-s-class10-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-class10-город': IISClass10ГородModel,
    'i-i-s-class10-дом': IISClass10ДомModel,
    'i-i-s-class10-комната': IISClass10КомнатаModel,
    'i-i-s-class10-улица': IISClass10УлицаModel
  },

  'application-name': 'Class10',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Class10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Class10',
          title: 'Class10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        class10: {
          caption: 'Class10',
          title: 'Class10',
          'i-i-s-class10-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-class10-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-class10-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-class10-дом-l': {
            caption: 'Дом',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-class10-город-l': IISClass10ГородLForm,
    'i-i-s-class10-дом-l': IISClass10ДомLForm,
    'i-i-s-class10-комната-l': IISClass10КомнатаLForm,
    'i-i-s-class10-улица-l': IISClass10УлицаLForm,
    'i-i-s-class10-город-e': IISClass10ГородEForm,
    'i-i-s-class10-дом-e': IISClass10ДомEForm,
    'i-i-s-class10-комната-e': IISClass10КомнатаEForm,
    'i-i-s-class10-улица-e': IISClass10УлицаEForm
  },

});

export default translations;
