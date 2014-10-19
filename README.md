# loopback-angular-admin

The goal is to have a starter project which can be used to quickly build an API with a frontend that are easily extended.

[![NPM version](https://badge.fury.io/js/loopback-angular-admin.png)](http://badge.fury.io/js/loopback-angular-admin)

## Features

- A Loopback REST API with authentication enabled built on the [Loopback Generator](https://www.npmjs.org/package/generator-loopback)
- A GUI built with AngularJS based on the [Angular Generator](https://github.com/yeoman/generator-angular)
- Angular UI-Router
- JSON-based based forms by [angular-formly](https://github.com/nimbly/angular-formly)
- Notifications by [angular-toasty](https://github.com/Salakar/angular-toasty)
- File upload with [Loopback storage services](https://github.com/strongloop/loopback-component-storage/)
- Admin template powered by [SB-Admin](http://startbootstrap.com/template-overviews/sb-admin/)
- Markdown Editor with live preview with [angular-markdown-editor](https://github.com/JimLiu/angular-markdown-editor)

### TODO:

- User management
- Permissions user actions (non-admins cannot access advanced functions)
- permissions on content items (non-admins can only edit own content, etc)
- Social authentication based on Passport.
- Detect if API is online [HubSpot/offline](https://github.com/HubSpot/offline)?
- Change template to [Ehesp/Responsive-Dashboard](https://github.com/Ehesp/Responsive-Dashboard) or [almasaeed2010/AdminLTE](https://github.com/almasaeed2010/AdminLTE)
- Loading indicators [Urigo/angular-spinkit](https://github.com/Urigo/angular-spinkit)?
- [Tell me more](https://github.com/beeman/loopback-angular-admin/issues/new)

## Installation

### Dependencies

Installation depends on `node`/`npm` with `grunt` and `bower` installed globally.

### Checkout this project:

    git clone https://github.com/beeman/loopback-angular-admin.git

### Install the Node packages:

    npm install

### Install the Bower packages:

    bower install

### Run a test to see if all is well:

    grunt

### Clone, install and run in a oneliner

    git clone https://github.com/beeman/loopback-angular-admin.git && cd loopback-angular-admin && npm install && bower install && grunt && npm start & grunt serve

## Running

The project is separated in a server and a client.


### Server

To run the server you issue the command:

    npm start

Or to run it with nodemon (needs `nodemon` installed globally). This will
automatically restart the server when you change its code:

    npm run dev

### Client

Rebuild the lb-services.js file with the correct `API_URL` for development.

    API_URL=http://0.0.0.0:3000/api grunt

To run the client you issue the command:

    grunt serve

It will open the project in your default browser with livereload enabled.
This will take care of reloading the page when you change your code.


## Connect to a database

You can specify the URL to the MongoDB database you want to use with the `MONGODB_URL` environment variable.

    MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start

Set `INITDB` to true if you want to load the initial dataset, which creates the admin user. The memory database (default) does this automatically.

    INITDB=true MONGODB_URL="mongodb://localhost:27017/loopback-angular-admin" npm start


## Development

Please refer the the following commits to see what it takes to [add](https://github.com/beeman/loopback-angular-admin/commit/16b1015554a41e45ca670d25fd258340908c4dbf) or [rename](https://github.com/beeman/loopback-angular-admin/commit/88254ce59af29818aec900514693e3fe6c94acea) a model in the API and the client.

For development you'd want to look into [yeoman](http://yeoman.io).

The API is built with [generator-loopback](https://www.npmjs.org/package/generator-loopback).

The GUI is built with [generator-angular](https://www.npmjs.org/package/generator-angular).

These should help you quickly add code to your project. Further details tailored to this project might follow in the future.

If you have any problems please [contact me](https://github.com/beeman/loopback-angular-admin/issues).
