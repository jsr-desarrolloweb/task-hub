# entrypoint.sh

npm install
npx sequelize db:migrate
npm run start