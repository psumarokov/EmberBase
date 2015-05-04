import DS from 'ember-data';

export default DS.Model.extend({
    img_host: 'http://localhost:3000',
    brand: DS.attr('String'),
    model: DS.attr('String'),
    image: DS.attr('String'),
    _id: DS.attr('String')
});
