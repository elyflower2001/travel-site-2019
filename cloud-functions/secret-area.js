exports.handler = function(event, contest, callback) {
    callback(null, {
        statusCode: 200,
        body: 'welcome to the secret area'
    });
}