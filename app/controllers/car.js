import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        delete: function() {
            var controller = this;
            var car = this.get("model");
            car.deleteRecord();
            car.save().then(function() {
                controller.transitionToRoute('cars');
            });
        }
    }
});
