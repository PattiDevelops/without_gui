import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

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
        this.get('flashMessages').success("Registration successful!");
      }, function() {
        console.log("Registering new user failed");
      });
    }
  }
});
