# simple-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

But you still get it.

## What is this

Simple base app with react, react-router, hot-reload &amp; tailwind, postcss.

This is a base project that you can use to jumpstart your react apps, it works similarly to create-react-app, just install the package globally and use it to create as many projects as you want (check How to install for detailed instructions).

## How to install

You can use both npm or yarn, the version I used to create this project are:

``` 
$ node -v ; npm -v ; yarn -v
v8.8.1
5.4.2
1.2.1
```

If you just freshly installed yarn/npm you are good to go, else you might need to upgrade, for npm I use `n` 

``` 
npm install -g n
```

to install it and after that select at least the stable version (what I used).

``` 
n stable
```

and now you have the latest stable version of node&npm.

`npm i -g edxi-react-app` to install this package globally, from there you will be able to jumpstart as many boilerplates as you wish.

`edxi-react-app folderName` to create a react boilerplate on the `folderName` folder. By default all dependencies are already installed, just `cd folderName` and start hacking.

`yarn start` / `npm start` to start dev server with hot reload, it's live on `localhost:3000` .

`yarn run build` / `npm run build` to build prod bundle, it includes both treeshaking and uglify to optimize the code as much as possible.

`yarn test` / `npm test` run the tests with Jest and Enzyme, by default the test included only check for the correct render of base components & routes, all are passing.

## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.

