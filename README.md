Day-Books
=============

## What is it?
This is a day book application that can keep your financial entries. It is an HTML5 application, 
and currently it can run on Chrome 27, Firefox 21, Opera 12. It supports different resolutions i.e. 
the layout will tune a bit to fit your screen.

Please check it on heroku: ```http://day-books.herokuapp.com/```

## Build the app

To sreve the application you need a server running Node.js with NPM installed. Step to get the web server running:

    cd Day-Books/
    npm install
    node app.js

the node server uses port 3000 by default, so you can go to ```http://localhost:3000/```

if you haven't install node, please visit: ```http://nodejs.org```

## Testing
The test is done by Qunit: ```http://qunitjs.com``` on client side, and 

Mocha: ```http://visionmedia.github.io/mocha/``` on server.

To run the test on Client side, please firstly build the app, and run the server: ```node app.js```
then go to ```http://localhost:3000/test```

To run the test on Server side, please go to `cd Day-Books` then use ```mocha ./test/ -R spec -u qunit -t 6000```

## More Detail?

I tried to put some of my resource in Clound Delivery Networks (CDN) in order to provide fast and reliable resources 
delivery. 

## Why Server?

It is a front-end application, but I used a server to generate the page and I need it to put my application on heroku.

## Code Structure

You will find all client side realted files in `public` folder, everything else are for the server.
The server is basically used to generate the page by `EJS` template and routing.

* `lib` folder is javascript codes for server.
* `routes` folder is javascript files too but for routing. e.g.
* `test` folder contains testing file using `mocha`
* `views` folder contains templates that will be rendered by NodeJS server
* `package.json` contains all other libraries that you need to run the NodeJS server
* `public/images` contains the image downloaded by the server, but it is not the image that the user has edited
* `public/javascripts` contains all javascript files the web application needs
* `public/stylesheets` contains CSS files
* `public/test` contains Qunit testing files.


## Others

I use `Requirejs` style on the Client side to host my library as that I used to use on `Node`. 
You do not have to download it, it will download automatically from cloud delivery network.
If there is any thing that doesn't look good, please leave me an issue, we can disscuss it!
