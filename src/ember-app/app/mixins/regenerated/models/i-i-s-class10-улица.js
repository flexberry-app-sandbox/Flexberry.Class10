import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяУлицы: DS.attr('string'),
  город: DS.belongsTo('i-i-s-class10-город', { inverse: null, async: false })
});

export let ValidationRules = {
  имяУлицы: {
    descriptionKey: 'models.i-i-s-class10-улица.validations.имяУлицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-class10-улица.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицаE', 'i-i-s-class10-улица', {
    имяУлицы: attr('Имя улицы', { index: 0 }),
    город: belongsTo('i-i-s-class10-город', 'Город', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('УлицаL', 'i-i-s-class10-улица', {
    имяУлицы: attr('Имя улицы', { index: 0 }),
    город: belongsTo('i-i-s-class10-город', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
