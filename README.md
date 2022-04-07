# Getting Started 

In the project directory, run:

### `yarn install`

Then, run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

Expected results

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total


### js fetch function is mocked using

`./src/data/api-mock.js`

### Endpoints

GET: http://localhost/consents
Returns the consent checkbox list

GET: http://localhost/user/consents
Returns the submitted user consents

POST: http://localhost/user/consents
Add a new user consent
