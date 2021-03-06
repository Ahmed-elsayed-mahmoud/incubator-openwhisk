// Licensed to the Apache Software Foundation (ASF) under one or more contributor
// license agreements; and to You under the Apache License, Version 2.0.

function main() {
    return {
        headers: {
            "content-type": "application/json"
        },
        statusCode: 200,
        body: new Buffer(JSON.stringify({'status': 'success'})).toString('base64')
    }
}
