# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About

Simple app to view artists and thier music albums.

Pros:
- Works
- Can save albums and artists for later
- Looks nice

Cons:
- Could probably be split into more components
- Functions can potentially be faster
- BEM not implemented in .scss
- Could be more async and react hooks

## Installation

Clone/download needed fies and run `npm install` to install all dependiecies and node_modules. After successful installation run `npm start` to start the app.

## Server

For purpose of avoiding code and moving API functionality where it belongs, you need to start the server by typing `npm run startServer`. This will allow for full functionality of the app.

## Tests

You can test this app by typing `npm test`. The test provided for some of the folders and files are unit tests, checking for correct rendering and redux store menagement. There are no integration tests; each component should be able to work individually and so if they all do, they will be albe to work together. But yes, instead of testing artistPage, albumsPage and SearchBox I could test only searchPage as an integrated test.