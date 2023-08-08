## step 1.) Installation

```bash
# clone backend project
$ git clone https://github.com/JhondelCaranay/trueblue-crud-nestjs.git

# navigate ro project folder
$ cd trueblue-crud-nestjs

# intall dependencies
$ npm install
```

## step 2.) Connecting to local database using prisma

```bash
# create DATABASE_URL in .env file
ex. DATABASE_URL="mysql://<username>:<password>@localhost:3306/<database name>"

# create a new database ( must be same with database name in your DATABASE_URL) in your preferred database tool (eg. xamp, mysql workbench)

# after creating database run prisma migration
$ npx prisma migrate dev
```

## step 3.) Running the app

```bash
# you can now run nest js in development mode

# start development server in port 3001
$ npm run start:dev

# now the backend is running on localhost:3001

```

## you can test api in Postman

```bash
# this is the list of all api routes to test the backend validation

# USERS ROUTE
POST    localhost:3001/api/users
GET     localhost:3001/api/users
GET     localhost:3001/api/users/1
PATCH   localhost:3001/api/users/1

# PRODUCTS ROUTE
POST    localhost:3001/api/products
GET     localhost:3001/api/products
GET     localhost:3001/api/products/1
PATCH   localhost:3001/api/products/1
```
