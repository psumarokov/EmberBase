import DS from 'ember-data';

export default DS.Model.extend({
    brand: DS.attr('String'),
    model: DS.attr('String'),
    image: DS.attr('String'),
    _id: DS.attr('String'),
    img_path: function() {
        return 'http://localhost:3000' + this.get('image');
    }.property('image'),
    full_name: function() {
        return this.get('brand') + ' ' + this.get('model');
    }.property('brand', 'model')
});
