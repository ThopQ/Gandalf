# Gandalf

## _Makes documenting computers a little less worrysome_

Gandalf is a CRUD-Application developed by Thomas Iseli and Dario Eng in association with TEKO Olten. At the moment you can only store customers and computers, maybe we'll add the rest of the CRUD-acronym after the pandemic is over. Altough Probably not.

> Gandalf does not mean something specific, I just
> name all my projects after Harry Potter characters
> and Dario doesn't know his way around Harry Potter so... sigh...

## Features

- Creates customers
- Creates computers for said customers
- Does it well

## Tech

Gandalf uses these dependencies

- [node.js](https://nodejs.org/en/) - evented I/O for the backend
- [Express](https://expressjs.com/de/) - fast node.js network app framework
- [diskdb](https://www.npmjs.com/package/diskdb) - small json nosql database
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) - a non sucking view engine for express
- [open](https://www.npmjs.com/package/open) - opens URLs in default browser

## Installation

Gandalf requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd Gandalf
npm install
npm start
```
