// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  usersApiUrl: 'http://localhost:10102/users/api/v1.0',
  loginApiUrl: 'https://api.econo.unlp.edu.ar/login/api/v1.0',
  oidp_issuer: 'https://oidc.econo.unlp.edu.ar/',
  logoutUrl: 'https://login.econo.unlp.edu.ar/logout/{{id_token}}/{{client_id}}',
  client_id: 'users-ui',
  version: '0.0.1a'  
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
