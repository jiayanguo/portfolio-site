# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deploy to oci
npm install gh-pages --save-dev

<!-- Add below scripts and homepage to package.json
```
"homepage": "http://jiayanguo.github.io/portfolio-site"
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
``` -->

npm run deploy


## Personal site deployed on OCI
https://objectstorage.us-phoenix-1.oraclecloud.com/n/ax5ixupubw30/b/jguo.site/o/index.html#/

(oci is not natively support static website. Need to use `deploy_to_oci.sh` to fix index.html file first before deploying)

Shorten URL:
http://shorturl.at/jntMV


![Website QR code](./jiayan_guo_website.png)


### Reference:
https://dev.to/sylviapap/how-to-make-your-own-no-template-personal-website-with-react-material-ui-and-netlify-pij
