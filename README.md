# React App with Urql and Graphene-Django backend

This is an example of using a graphene-django backend, using the standard sqlite3 database. The frontend is React with Urql as GraphQL client.

## Requirements

- python3 & pip3
- npm or yarn (Node.js)

Install dependencies (requirements.txt)
`pip install -r requirements.txt`

## Start servers

### Backend

Create .env file in backend/

`cp backend/.env.template backend/.env`

In the project directory, migrate:

`python manage.py migrate`

Then create a superuser (admin):

`python manage.py createsuperuser`

and run the Django server:

`python manage.py runserver`

Go to `localhost:8000` for admin area and login with your superuser credentials you created before. Optional: Add a questions to the database.

Go to `localhost:8000/graphql` for graphiql interface.

### Frontend

n the _frontend_ directory, you can run the React server:

```
cd frontend
yarn
yarn start
```

#### or use npm:

```
cd frontend
npm install
npm run start
```

Go to `localhost:3000` to use the app.
