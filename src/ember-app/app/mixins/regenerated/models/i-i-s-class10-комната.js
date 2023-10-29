import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  дом: DS.belongsTo('i-i-s-class10-дом', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-class10-комната.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-class10-комната.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-class10-комната', {
    номер: attr('Номер', { index: 0 }),
    дом: belongsTo('i-i-s-class10-дом', 'Дом', {
      номерДома: attr('Номер дома', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номерДома' })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-class10-комната', {
    номер: attr('Номер', { index: 0 }),
    дом: belongsTo('i-i-s-class10-дом', 'Номер дома', {
      номерДома: attr('Номер дома', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
