import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

var attr = DS.attr;

const Validations = buildValidations({
  name: [
    validator('presence', {
      presence: true,
      message: "Benutzername darf nicht leer sein"
    })
  ],
  email: [
    validator('presence', {
      presence: true,
      message: "Email darf nicht leer sein"
    }),
    validator('format', {
      type: 'mail',
      message: "Entspricht nicht einer gültigen Email-Adresse"
    })
  ],
  password: [
    validator('presence', {
      presence: true,
      message: "Passwort darf nicht leer sein"
    })
  ],
  password_confirmation: [
    validator('presence', {
      presence: true,
      message: "Passwortbestätitung darf nicht leer sein"
    }),
    validator('confirmation', {
      on: 'password',
      message: 'Passwörter stimmen nicht überein.'
    })
  ]

});


export default DS.Model.extend(Validations, {
  'name': attr('string'),
  'email': attr('string'),
  'password': attr('string'),
  'password_confirmation': attr('string')
});
