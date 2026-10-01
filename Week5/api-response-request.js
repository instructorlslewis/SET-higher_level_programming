// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

    // fetch('https://jsonplaceholder.typicode.com/users/1')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(`Name: ${data.name}`);
    //     console.log(`Email: ${data.email}`);
    //     console.log(`City: ${data.address.city}`);
    // });

    // fetch('https://jsonplaceholder.typicode.com/users/99999')
    // .then(response => {
    //     console.log(response.status);
    //     if (!response.ok) {
    //         throw new Error("Request failed");
    //     }

    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.error(error.message);
    // });

const apiKey = process.env.API_KEY;

    if (!apiKey) {
         throw new Error("API key is not set");
    }


console.log("API key loaded successfully.");