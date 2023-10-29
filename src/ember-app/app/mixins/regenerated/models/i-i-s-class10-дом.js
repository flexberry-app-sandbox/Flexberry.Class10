import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерДома: DS.attr('number'),
  улица: DS.belongsTo('i-i-s-class10-улица', { inverse: null, async: false })
});

export let ValidationRules = {
  номерДома: {
    descriptionKey: 'models.i-i-s-class10-дом.validations.номерДома.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-class10-дом.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомE', 'i-i-s-class10-дом', {
    номерДома: attr('Номер дома', { index: 0 }),
    улица: belongsTo('i-i-s-class10-улица', 'Улица', {
      имяУлицы: attr('Имя улицы', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имяУлицы' })
  });

  modelClass.defineProjection('ДомL', 'i-i-s-class10-дом', {
    номерДома: attr('Номер дома', { index: 0 }),
    улица: belongsTo('i-i-s-class10-улица', 'Имя улицы', {
      имяУлицы: attr('Имя улицы', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
