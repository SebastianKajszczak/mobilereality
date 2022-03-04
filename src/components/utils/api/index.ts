const API_URL = "https://api.thecatapi.com/v1";

function request(endpoint: string, method = "GET", data = null) {

    let config;
    if(method === 'POST') {
        config = {
            method,
            headers: {
                "Content-type": "application/json",
                "x-api-key": "739f649d-2a06-45a3-acf5-a0c44c1476de"
            },
            body: JSON.stringify(data)
        };
    } else {
        config = {
            method,
            headers: {
                "Content-type": "application/json",
                "x-api-key": "739f649d-2a06-45a3-acf5-a0c44c1476de"
            },
        };
    }
    const url = `${API_URL}${endpoint}`;
    return fetch(url, config).then((response) => {
        return response.json();
    });
}

function get(endpoint: string) {
    return request(endpoint);
}

function post(endpoint: string, data: any) {
    return request(endpoint, 'POST', data);
}

function _delete(endpoint: string) {
    return request(endpoint, 'DELETE');
}

export default {
    get,
    post,
    _delete
};
