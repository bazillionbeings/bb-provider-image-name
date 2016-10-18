'use strict';

const request = require('request'),
    fs = require('fs');

class ImageNameProvider {
    execute(input) {
        return new Promise((resolve, reject) => {
            const formData = {
                image: fs.createReadStream(input.imagePath)
            };

            // request.post({ url: 'https://www.wolframcloud.com/objects/eca9494d-1dfd-48c4-b063-e2a98f66d526', formData }, (err, httpResponse, body) => {
            request.post({ url: 'https://www.wolframcloud.com/objects/c99593f9-3ef4-461a-ba8c-f40ad1d2a602', formData }, (err, httpResponse, body) => {
                if (err) {
                    reject(err);
                } else {
                    if (body.length < 3) {
                        reject('no_result');
                    } else {
                        body = body.substring(0, body.length - 1);
                        body = body.substring(1);
                        resolve(body);
                    }
                }
            });
        });
    }
}

module.exports = ImageNameProvider;

//let imagePath = __dirname + '/eagle.jpg';