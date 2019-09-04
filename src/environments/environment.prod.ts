export const environment = {
  production: true,
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
