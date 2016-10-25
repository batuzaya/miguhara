var MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';

if (MONGODB_URL) {
  module.exports = {
    db: {
      name: 'db',
      connector: 'loopback-connector-mongodb',
      url: MONGODB_URL
    }
  };
}
