'use strict';

const request = require('request'),
    fs = require('fs');

class ImageNameProvider {
    execute(input) {
        const formData = {
            image: fs.createReadStream(input.imagePath)
        };

        request.post({ url: 'https://www.wolframcloud.com/objects/eca9494d-1dfd-48c4-b063-e2a98f66d526', formData }, (err, httpResponse, body) => {
            if (err) {
                return console.error('upload failed:', err);
            }
            body = body.substring(0, body.length - 1);
            body = body.substring(1);
            console.log(body);
        });
    }
}

module.exports = ImageNameProvider;

//let imagePath = __dirname + '/eagle.jpg';