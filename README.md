# Getting Started with MeetLisst App

-You can visit this project at https://meet-list-app.web.app/

-This project has been made during a weekend. I had to face some challenges: from the eslint configuration (you don't do it often and can be tricky) to the Cypress installation in the project to test end-to-end the application. With information and time I was able to solve it, as others that pop up during the code. Typing the variables and functions was challenging in order to have everything working properly, I avoid the use of any as much as I can.

-As a I mention before this project is done with React, Typescript and Redux.

-I used Redux to manage the states of the application. I have 4 different types of actions and one reducer.

-To connect the components to the state I used two approachs:
  -In Dashboard I set a Higher-Order Component (HOC), and pass the state using mapStateToProps and the actions through mapDispachToProps.
  -In Detail I use the hook useSelector to retrieve the state value and useDispatch to get the dispatch function.

-About testing:
  -I did unit testing using Jest.
  -I did component testing using React Testing Library.
  -I did end-to-end test using Cypress.

-This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.