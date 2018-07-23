# **ACME BANK** 
API based banking app using Express, React, Redux, React Router, Webpack & materialize-css.
Fully responsive. Uses mock data to operate.

## _Requirements_
- Node JS
- NPM / YARN
- nodemon [ `npm i -g nodemon` ]

## _Quick start_
- Clone or download project
- Run `npm run quickstart` or `yarn quickstart` in the root project directory
   - This will install server-side dependencies (Express server...)
   - Install client dependencies (react redux...)
   - If everything went right, it should then have compiled the css, created an Express server on `PORT 5000` and a WebpackDevServer on `PORT 3000` - which should open up in the browser. If it fails to open but compiled successfully, the react app can be viewed in the browser @ `http://127.0.0.1:3000` | `http://localhost:3000`. 
        - _Caution: Sometimes `PORT 3000` can be busy, CLI will prompt to open the app at another port_
- You can use any of the following sample customer details to log into the app:
    - `Email: john@email.com  ---> Password: john`
    - `Email: sam@email.com  ---> Password: sam`
    - `Email: jane@acme.com  ---> Password: jane`

## _Overview_

**Brief project overview and file structure:**
- `./package.json` : Server side dependencies & launch scripts to run both server and client simultaneously
- `./app.js` : init & configure Express server and backend routes mapping 
- `./routes` : Express server API route handling modules
- `./client` : Client side app container -- bootstrapped with create-react-app
    - `/src` 
        - `/index.js` : root js file - bootstraps the react app
        - `App.js` : App container - acts as a host for all react components & determines which components to render based on routing
        - `/store.js` : bootstraps redux store for state management
        - `/index.css` : app main stylesheet
        - `/components` : React components
            - `/` : root components representing the different sections of the customer portal
            - `/atoms` : single-purpose components
            - `/molecules` : multipurpose/complex components
        - `/styles` : app styles [ SASS ] - similar structure to react components directory structure
            - `/index.scss` : main stylesheet of app - imports materialize-css & all sass files -- compiles to `./client/src/index.css`
        - `/actions` : redux action creators & dispatchers
            - `/types.js` : common constants used throughout the app
        - `/reducers` : redux reducers - where all the magic happens ;)
        - `/models` : Data models
        - `/helpers` : Reusable utility functions
        - `/assets` : images and fonts directory
        - `/package.json` : Client side dependencies and scripts - configures a proxy param to the backend API [@`PORT 5000`] for proper API calls handling on the client side
    - `/public` : Publicly accessible assets - hosts the base index.html
    - `/build` : Build directory
- `./bin/www` : Bootstraps Express server to run backend API
- `./data` : Mock-up data
- `./public` : Express server static assets, publicly accessible
- `./views` : Express views to render: Uses PUG templating engine
- `./services` : helpers to use on backend API

## _TODO_
- Create fun 404 page
- Add a NoSQL DB to persist changes
- Deploy to an online platform

_...and more!_


 KUDOS
--------------------------------------------------------------------
_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Express Generator](https://github.com/expressjs/generator)_

## License

[MIT © sagarsys.](./LICENSE)

---------------------------------------------------------------------
