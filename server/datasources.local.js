module.exports = {
  db: {
    host: 'cluster0-y5ifx.mongodb.net',
    port: 27017,
    url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-y5ifx.mongodb.net/test?retryWrites=true&w=majority`,
    database: 'blog-posts',
    password: `${process.env.MONGO_PASS}`,
    name: 'mongoatlas',
    user: `${process.env.MONGO_USER}`,
    useNewUrlParser: true,
    connector: 'mongodb'
  }
}