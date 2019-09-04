// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  chatUrl: 'https://sleepy-plateau-12004.herokuapp.com',
  auth: {
    clientID: 'T5LhoYPlcat6RXPCdh34BcIZ3lYvjSlc',
    domain: 'dev-m231um59.auth0.com', // e.g., https://you.auth0.com/
    audience: 'http://localhost:3000', // e.g., http://localhost:3001
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  },
  AWS: {
    AWSAccessKeyId:"AKIAIJWNY4UQVJMNA66Q",
    AWSSecretKey:'exoZjG/B2R+xcSZV0o4m08YrtuWwgEn1xlOaqvls',
    Bucket:'bubblechat'
  }
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
