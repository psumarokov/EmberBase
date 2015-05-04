import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        add: function() {
            var car = this.get("model");
            var fd = new FormData(document.getElementById("new_car"));
            fd.append('model', car.model);
            fd.append('brand', car.brand);
            Ember.$('#image').val('');

            var controller = this;

            Ember.$.ajax({
                url: 'http://localhost:3000/cars/',
                data: fd,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (data) {
                    if (data.status === 'OK') {
                        // refresh the list
                        controller.set('model', controller.store.find('car'));
                    }
                }
            });
        }
    }
});
