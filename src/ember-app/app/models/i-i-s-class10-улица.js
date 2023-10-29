import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as УлицаMixin
} from '../mixins/regenerated/models/i-i-s-class10-улица';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УлицаMixin, Validations, {
});

defineProjections(Model);

export default Model;
