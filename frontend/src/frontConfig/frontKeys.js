if (process.env.NODE_ENV === 'production') {
    module.exports = require('./frontKeys_prod');
} else {
    module.exports = require('./frontKeys_dev');
}