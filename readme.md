# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:**
1. Clone repo using 'git clone'
2. Install 'Docker' if not alreay installed. Go to [Install Doker](https://docs.docker.com/get-docker/) 
3. Verify docker is ready by running the following commands in your terminal: 'docker -v' or 'docker-compose -v'
4. Run 'docker-compose up' from the project root directory to load backend and frontend
5. Check backend is running by pointing your browser to ('http://localhost:3000/api/ping)
6. Chekc frontend is running by pointing your browser to ('http://localhost:3001/register')
7. Create a new user
