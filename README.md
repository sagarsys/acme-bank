# **ACME BANK** 
API based banking app using Express, React, Redux, React Router, Webpack & materialize-css.
Fully responsive. Uses mock data to operate -- no DB implemented..yet.

## _Requirements_
- Node JS
- NPM / YARN

## _Quick start_
- Clone or download project
- Open up a terminal in the root project directory
- Run `npm run quickstart` or `yarn quickstart`
   - This will install server-side dependencies (Express server...)
   - Install client dependencies (react redux stuff...)
   - If everything went right, it should then create an Express server on `PORT 5000` and a WebpackDevServer on `PORT 3000` - which should open up in the browser

## _TODO / Improvements_
- Hide Nav on Login screen
- Fix bug with Profile page editing -- Add redux-form to fix pre-population of form data from redux store
- Migrate all of the state management away from react to redux
- Prevent user access to application routes if not authenticated -- redirect to Login
- Add new feature to Profile page that would allow the user to toggle the status of his accounts (active/inactive)
- Add material progress whenever a request is made to server
- ANIMATIONS! UI/UX overhaul
- Create FUN 404
- Add a NoSQL DB to persist changes
- Check for cross-browser bugs (IE11+)
- Deploy to an online platform like Heroku

_...and more!_


 KUDOS
--------------------------------------------------------------------
_This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Express Generator](https://github.com/expressjs/generator)_

---------------------------------------------------------------------
