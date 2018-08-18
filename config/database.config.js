module.exports = {
    url: process.env.OPENSHIFT_MONGODB_DB_URL ? process.env.OPENSHIFT_MONGODB_DB_URL + process.env.MONGODB_DATABASE : 'mongodb://localhost:27017/shaktima'
    
}