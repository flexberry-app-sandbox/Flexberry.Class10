import { Serializer as ДомSerializer } from
  '../mixins/regenerated/serializers/i-i-s-class10-дом';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДомSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
