import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Class10',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Class10',
          title: 'Class10'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
