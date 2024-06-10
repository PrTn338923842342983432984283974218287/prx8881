const fetch = require('node-fetch');

exports.handler = async (event) => {
    const url = event.queryStringParameters.url;
    if (!url) {
        return {
            statusCode: 400,
            body: "URL parameter is required"
        };
    }

    try {
        const response = await fetch(url);
        const body = await response.text();
        return {
            statusCode: 200,
            body: body,
            headers: {
                'Content-Type': 'text/html'
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error fetching content: ${error}`
        };
    }
};