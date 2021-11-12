# React App with Urql and Graphene-Django backend

This is an example of using a graphene-django backend, using the standard sqlite3 database. The frontend is React with Urql as GraphQL client.

## Requirements

- Python3
- Pip to install django and graphene-django dependencies
- Npm or Yarn

## Start servers

### Backend

In the project directory, you can run the Django server:

```
python manage.py migrate
python manage.py runserver
```

Go to `localhost:8000` for admin page

Go to `localhost:8000/graphql` for graphiql page

### Frontend

In the _frontend_ directory, you can run the React server:

```
cd frontend
yarn
yarn start
```

### or use npm:

```
cd frontend
npm install
npm run start
```
