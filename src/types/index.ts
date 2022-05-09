type Input = {
  value: String;
  isValid: Boolean;
};
export type Coach = {
  id: String;
  firstName: String;
  lastName: String;
  areas: String[];
  description: String;
  hourlyRates: Number | String;
};
export type Filter = {
  frontend: Boolean;
  backend: Boolean;
  career: Boolean;
};
export type RegisterInputs = {
  firstName: Input;
  lastName: Input;
  description: {
    value: any;
    isValid: Boolean;
  };
  rate: {
    value: Number;
    isValid: Boolean;
  };
  areas: {
    value: String[];
    isValid: Boolean;
  };
  formIsValid: Boolean;
};
export type Message = {
  email: String;
  message: any;
  isValid: Boolean;
};
