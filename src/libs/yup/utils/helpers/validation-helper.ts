import { addMethod, number, string } from 'yup';

import { REGEX_VALID } from '../enums';

// ----------------------------------------------------------------------

addMethod(string, 'isUseRequired', function validate(message) {
  return this.when('use', {
    is: true,
    then: schema => schema.required(message),
    otherwise: schema => schema.optional(),
  });
});

addMethod(number, 'isUseRequired', function validate(message) {
  return this.when('use', {
    is: true,
    then: schema => schema.required(message),
    otherwise: schema => schema.optional(),
  });
});

addMethod(string, 'containNumber', function validate(message) {
  return this.matches(REGEX_VALID.containNumber, message);
});
