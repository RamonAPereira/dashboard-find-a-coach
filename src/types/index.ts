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
