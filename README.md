## Prerequisites
You need to have Node installed in you local system. <br/>
To install [Node](https://nodejs.org/en/download/).<br/>
**ems-backend** should be setup and be running prior to running the ems-frontend <br/>
If the backend is setup properly you can use the following data to login.
- Initial Admins Data <br/>

| ID  | Name  | Password |
|-----|-------|----------|
| A01 | Dana  | White    |
| A02 | Shane | Black    |

- Initial Employees Data <br/>

| ID  | Name  | Password  | Role            | Description   |
|-----|-------|-----------|-----------------|---------------|
| E01 | Okada | Kazuchika | Lead Fighter    | He Fights     |
| E02 | Kenny | Omega     | Lead Challenger | He Challenges |


## About
Uses the API's of **ems-backend** to fetch/edit/add various data.

## How to run in Local system

In the project directory run:

### `npm install`

Installs all the dependencies for the project.<br/>
If it throws an error. Run it again and that should work

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm install -g serve`

Installs the serve package required to serve the optimized production build.

### `serve -s build`

Runs the prodcution build.

## Browser Support

Should work perfectly for Chrome, Firefox, Safari, Microsoft Edge, IE >11