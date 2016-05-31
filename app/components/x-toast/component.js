import Ember from 'ember';

const {
  computed: {readOnly},
  // run: {next, cancel},
  getWithDefault, Component, computed
} = Ember;

export default Component.extend({
  classNames: ['alert'],
  classNameBindings: ['active', 'exiting', 'type'],
  acitve: false,
  type: computed('content.type', function() {
    return 'alert-' + this.get('content.type');
  }),
  
  exiting: readOnly('content.exiting'),

  _destroyFlashMessage(){
    const flash = getWithDefault(this, 'content', false);
    if (flash) {
      flash.destroyMessage();
    }
  }
});
