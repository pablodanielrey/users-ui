export const environment = {
  production: false,
  usersApiUrl: 'http://localhost:5000/users/api/v1.0',
  oidp_issuer: 'https://oidc.econo.unlp.edu.ar/',
  logoutUrl: 'https://login.econo.unlp.edu.ar/logout/{{id_token}}/{{client_id}}'
};
