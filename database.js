const Pool = require('pg').Pool

const connection = new Pool({
  user: 'nezsghkmpsxxuo',
  host: 'ec2-54-170-190-29.eu-west-1.compute.amazonaws.com',
  database: 'd6n3ktjpcb6cd9',
  password: '7de81424b0e5b2032d94ed9b2f1b5fbf3b4e55546c13cd6d949165c7af55d101',
  port: 5432,
})
module.exports = connection;