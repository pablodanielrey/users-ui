export const environment = {
  production: false,
  usersApiUrl: 'https://api.econo.unlp.edu.ar/users/api/v1.0',
  //usersApiUrl: 'http://localhost:10102/users/api/v1.0',
  loginApiUrl: 'https://api.econo.unlp.edu.ar/login/api/v1.0',
  //loginApiUrl: 'http://localhost:10002/login/api/v1.0',
  oidp_issuer: 'https://oidc.econo.unlp.edu.ar/',
  logoutUrl: 'https://login.econo.unlp.edu.ar/logout/{{id_token}}/{{client_id}}',
  version: '0.0.1a'
};
