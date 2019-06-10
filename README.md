# Simple API with AdonisJS

## Backend

### Install Adonis CLI and dependencies
``` bash
npm i -g @adonisjs/cli
cd adonisjs
npm install
```

### Configure the database
You'll need to install your database's package. In my case, it was mysql.
Also, create your own .env file, modifiyng the .env.example file in the root directory.

``` bash
npm install mysql
adonisjs migration:run
```

### Running the server

``` bash
adonis serve --dev
```

## Frontend

Assuming you're on the root directory of this project, run the following commands:

```bash
cd frontend
npm install
npm install axios
npm start
```
