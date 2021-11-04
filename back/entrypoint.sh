# entrypoint.sh

# TODO: npx sequelize seed

npm install
npx sequelize db:migrate
npm run start