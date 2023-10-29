import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-class10-город', 'Unit | Serializer | i-i-s-class10-город', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-class10-город',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-class10-город',
    'model:i-i-s-class10-дом',
    'model:i-i-s-class10-комната',
    'model:i-i-s-class10-улица',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
