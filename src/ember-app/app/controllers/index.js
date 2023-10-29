import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.class10.caption'),
          title: i18n.t('forms.application.sitemap.class10.title'),
          children: [{
            link: 'i-i-s-class10-город-l',
            caption: i18n.t('forms.application.sitemap.class10.i-i-s-class10-город-l.caption'),
            title: i18n.t('forms.application.sitemap.class10.i-i-s-class10-город-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-class10-улица-l',
            caption: i18n.t('forms.application.sitemap.class10.i-i-s-class10-улица-l.caption'),
            title: i18n.t('forms.application.sitemap.class10.i-i-s-class10-улица-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-class10-комната-l',
            caption: i18n.t('forms.application.sitemap.class10.i-i-s-class10-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.class10.i-i-s-class10-комната-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-class10-дом-l',
            caption: i18n.t('forms.application.sitemap.class10.i-i-s-class10-дом-l.caption'),
            title: i18n.t('forms.application.sitemap.class10.i-i-s-class10-дом-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})