![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=random-user-coral)
# Getting Started with Random User Data Table
![image](https://user-images.githubusercontent.com/7523159/178709860-bfc4fc5b-af25-4d6d-8eb4-9a29a6fbeb92.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How To Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\


## Background

This personal project is about to fecth random data user and display it into the table. There are several feature that implemented at this project
- Debounce Search ➡️ User are able to search data by the keyword that inputed through the text field. When user typing any keyword, it will give delay for `1 second` before hit the API. This function is called debounce process.
- Filter by gender ➡️ User are able to filter the data based on gender that selected on select box gender.
- Reset Filter ➡️ User are able reset all the filtered data and back to the default state.
- Pagination ➡️ User will see the pagination button at the bottom of the table, it means the table will display 10 data per page for each request.
- Sort by Column ➡️ User are able to sort the data by clicking the header column. It can be sorted ascending or descending.

## UI KIT 👕

This project application is using UI KIT from React Material UI https://mui.com/

## Data Fetching

This project using random data user that provided by https://randomuser.me/. To fetch the API, we are utilize a react hook library called `SWR`

### Why SWR? 🚀
The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data. With SWR, components will get a stream of data updates constantly and automatically.
And the UI will be always fast and reactive.

## History Changes

This project contains some features that developed one by one.
Each feature will be merged through the raised PR and automatically deployed to the Vercel.
Here are the PR's the deployment links

- [PR link](https://github.com/agussudiana/random-user/pull/1) for Setup Project
- [PR link](https://github.com/agussudiana/random-user/pull/2) for Display data table and pagination | [See Deployment](https://random-user-1herkq9fh-agussudiana.vercel.app/)
- [PR link](https://github.com/agussudiana/random-user/pull/3) for Filter Component Creation | [See Deployment](https://random-user-qx1owitv6-agussudiana.vercel.app/)
- [PR link](https://github.com/agussudiana/random-user/pull/4) for Order data by clicked column header | [See Deployment](https://random-user-26krdf99s-agussudiana.vercel.app/)
- And finally, the complete project | [See Web App](https://random-user-coral.vercel.app/) 🎉
