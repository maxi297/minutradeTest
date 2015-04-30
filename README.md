#Minutrade Client API

## Setting the environment

### Install MongoDB
* [Windows](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
* [Mac](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* [Linux](http://docs.mongodb.org/manual/administration/install-on-linux/)

### Install Node JS
* Windows : http://nodejs.org/download/
* Mac : http://nodejs.org/download/
* Ubuntu 14.04 (for other distribution : [Documentation Node Linux](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager))
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Install Node libraries
In command line:
```
npm install
```

## Run the server

### Start mongo:
In command line:
* Windows:
```
C:\Program Files\MongoDB\bin\mongod.exe
```
Mac:
```
mongod
```
Ubuntu:
```
sudo service mongod start
```

### Start Node server:
In command line: 
```
node index.js
```

## Run the tests

### Install Mocha
In command line: 
```
npm install mocha -g
```

### Execute
```
mocha test/utils/ClientValidator.js
```