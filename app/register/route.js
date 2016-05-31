import Ember from 'ember';

export default Ember.Route.extend({
  actions:
  {
    register()
    {
      var user = this.store.createRecord('user', {
        name : this.controller.get('name'),
        email : this.controller.get('email'),
        password : this.controller.get('password'),
        password_confirmation : this.controller.get('password_confirmation')
      });
      user.save().then(() => {
        this.transitionTo('index');
      }, function() {
        console.log("Registering new user failed");
      });
    }
  }
});
