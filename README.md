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

## API guide

### Why MongoDB and NodeJS ?
It was hard for me to see the scope outside of this test. More information about the context and the future use of this API could have narrowed my choice between RDBMS or NoSQL and my choice for a REST API framework. Since I didn't have this information, I decided to have fun with this test and to learn something new. I choose MongoDB and NodeJS because I never use those before. 
For a small project like that, I would probably have used Spring MVC for the REST API because I am used to it (which is not a very good reason in a professional context) and I would have implemented my data layer using JSON in text files because for something that small, it removes some dependencies and it is easier to implement.

### Basic API documentation 
Use something like Advanced REST client to do the following calls:

#### Get all clients
<code>GET</code> localhost:3000/clients

#### Get a client by CPF
<code>GET</code> localhost:3000/clients/:cpf

#### Create a new client
<code>POST</code> localhost:3000/clients
Example of body: { "cpf":"11438374798","name":"test","email":"godo1@godo.com","maritalStatus":"single","address":"123 rue des Saules","phoneNumbers": ["11231234567", "11231234560"]}

#### Remove a client
<code>DELETE</code> localhost:3000/clients/:cpf