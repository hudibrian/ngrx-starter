// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hackernewsFirebase: {
    apiKey: "AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw",
    authDomain: "stackblitzfire.firebaseapp.com",
    databaseURL: "https://stackblitzfire.firebaseio.com",
    storageBucket: "stackblitzfire.appspot.com",
    messagingSenderId: "42917465053"
  }
};
