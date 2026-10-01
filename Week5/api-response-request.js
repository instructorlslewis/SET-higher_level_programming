

/**
 * Professor Lewis
 * 10/1/2026
 * 
 * fetch() to send an asynchronous HTTP request to an API. 
 * The response is converted from JSON into a JavaScript object, 
 * and the returned data is then displayed in the console.
 */
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {

        console.log(data);
    });

/**
 * fetch() to retrieve a user data from an API, converts the 
 * JSON response into a JavaScript object, and then accesses specific 
 * properties such as the user’s name, email, and city. 
 */
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {

        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);
        console.log(`Name: ${data.address.city}`);
    });

    /**
     * fetch() to request data from an API, checks whether the response was successful,
     *  converts the response to JSON, and uses .catch() to handle any errors that occur.
     */
fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        console.log("Status: ", response.status);

        if(!response.ok){
            throw new Error("Request failed");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error.message);

});

/**
 * Implements how to protect sensitive information, such as API keys, 
 * by storing them in a .env file instead of hard-coding them into JavaScript. 
 * It also creates a .gitignore file to prevent the .env file from being 
 * committed to GitHub, then test accessing the key in Node.js using process.env.

 */
const apiKey = process.env.API_KEY;

if(!apiKey){
    throw new Error("API key is not set");
}

console.log("API key loaded successfully.");