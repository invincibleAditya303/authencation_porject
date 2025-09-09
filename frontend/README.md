# Klickks Login & Logout Flow

A simple authentication system using React and Node.js + Express with SQLite.

## Motivation

Build a foundational login/logout flow with session-based authentication.

## Features

- User registration
- Login with session persistence
- Logout functionality
- SQLite with bcrypt-based password hashing

## Technologies Used

- React.js
- Node.js, Express.js
- SQLite
- bcrypt, express-session (or similar)

  ### checkput the screenshots and vdeo demo here

<img width="1366" height="600" alt="Screenshot 2025-09-09 221508" src="https://github.com/user-attachments/assets/2f82bab7-636b-4c84-8a03-5fd13f5e7481" />

<img width="1366" height="600" alt="Screenshot 2025-09-09 221508" src="https://github.com/user-attachments/assets/2f82bab7-636b-4c84-8a03-5fd13f5e7481" />

<img width="1366" height="613" alt="Screenshot 2025-09-09 223202" src="https://github.com/user-attachments/assets/2dba04e2-86f9-420b-ace8-b556d52b5eab" />


## Setup & Run

**Backend**

```bash
cd backend
npm install
node index.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open (https://authencation-porject.vercel.app) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage

1. Register with an email and password.
2. Login to set an authentication session.
3. Access protected pages.
4. Logout to clear the session cookie.

### How to Use the Register Page

1. Navigate to https://authencation-porject.vercel.app<img width="1366" height="720" alt="Screenshot 2025-09-09 221508" src="https://github.com/user-attachments/assets/db8ea197-5ee1-4c2f-8db5-661ea012e6e7" />
/register`.
2. Fill in the registration form with:
   - **Email**: your email address
   - **Password**: choose a secure password
3. Click **"Submit"**.
4. On success, you'll be redirected to the **Login** page.
5. Now login with your new credentials from the credentials table above.

## Sample Credentials (Pre-seeded)

To help you get started quickly, here are some pre-created user accounts seeded in the SQLite database:

| Email                    | Password      |
|--------------|---------------------------|
| `bob@example.com`       | `bob@123` |

You can log in using any of these credentials:
- Navigate to `(https://authencation-porject.vercel.app/login)`
- Use the table above to test registration, login, or session persistence.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
