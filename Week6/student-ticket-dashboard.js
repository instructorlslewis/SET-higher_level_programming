/**
 * JavaScript DOM, jQuery, and AJAX
 * Student Ticket Dashboard
 * using student-ticket-dashboard.js, student-ticket-dashboard.html
 * Professor Lewis
 * October 8, 2026
 */

 /**
  * Intial display function that use native JavaScript 
  */
// function showTicket(ticket){
//     document.querySelector("#ticket-title").textContent = ticket.title;
//     document.querySelector("#ticket-body").textContent = ticket.body;

// }

/**
 * 
  * Intial display function that use native JavaScript 
  */
// function showStatus(message){
//     document.querySelector("#dashboard-status").textContent = message;
// }


/**
 * Modified dsplay function using jQuery
 */
function showTicket(ticket) {
    $("#ticket-title").text(ticket.title);
    $("#ticket-body").text(ticket.body);
}

/**
 * 
 * Modified dsplay function using jQuery
 */
function showStatus(message) {
    $("#dashboard-status").text(message);
}

/**
 * Use static object and displaying data , title and body using display functions 
 */
function loadLocalTicket(){
    const ticket = {
        title: "Cannot access course module",
        body: "The Week 6 module displays an access issue message."
    };

    showTicket(ticket);
    showStatus("Local ticket displayed.");
}

// loadLocalTicket();

/**
 * Accessing remote object using async implementation with fecth() function and endpoint.
 *  Displaying data from endpoint response , title and body using display functions 
 */
async function loadRemoteTicket(){
    showStatus("Loading remote ticket...");

    try{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/4"
        );

        if(!response.ok){
            throw new Error(`Request failed: ${response.status}`);
        }
        const ticket = await response.json();
        showTicket(ticket);
        showStatus("Remote ticket loaded successfully.");

    }catch (error){
        console.error(error);
        showStatus("Unable to load the ticket");
    }

}
// loadRemoteTicket();

/**
 * Attach a click event listener to the load-ticket-btn button to call the loadRemoteTicket() function.
 */
function setUpButton(){
    const button = document.querySelector("#load-ticket-btn");
    button.addEventListener("click", loadRemoteTicket);
}

/**
 * 
 * startApp1(): Sets up the button and displays the dashboard's ready status.
 */
function startApp1(){
    setUpButton();
    showStatus("Dashboard Ready");
}

/**
 * Runs startApp1() when the HTML document has been fully loaded and the DOM is ready.
 */
document.addEventListener("DOMContentLoaded", startApp1);


/**
 * Compare Native JavaScript event listener to jQuery even listener
 */
// //Native event listener
document.querySelector("#load-ticket-btn")
    .addEventListener("click", loadRemoteTicket);

//jQuery event listener
$("#load-ticket-btn").on("click", loadRemoteTicket);

/**
 * loadTicketWithAjax(): Retrieves ticket data from an API using jQuery AJAX
 * and updates the webpage or displays an error.
 */
function loadTicketWithAjax(){
    showStatus("Loading remote ticket with AJAX...");

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/4",
        method: "GET",

        success: function(ticket){
            showTicket(ticket);
            showStatus("Ticket loaded with jQuery AJAX.");
        },

        error: function(xhr){
            console.error("Request failed: ", xhr.status);
            showStatus("Unable to load the AJAX ticket.")
        }


    });
}

/**
 * setupLoadButton(): Adds a click event listener to the Load Ticket button
 * to call loadTicketWithAjax() using jQuery.
 */
function setupLoadButton(){
    $("#load-ticket-btn").on("click", loadTicketWithAjax);
    
}

/**
 * startApp(): Sets up the button and displays the dashboard's ready status.
 */
function startApp() {
    setupLoadButton();
    showStatus("Dashboard ready.");
}

/**
 * $(document).ready(startApp): Runs startApp() when the DOM is ready using jQuery
 */
$(document).ready(startApp);