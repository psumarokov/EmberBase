import DS from 'ember-data';

export default DS.Model.extend({
    brand: DS.attr('String'),
    model: DS.attr('String')
});
