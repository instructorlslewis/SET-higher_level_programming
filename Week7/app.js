// Week 7: AI Literacy Idea Lab
// Because this script uses "defer", the HTML has been parsed before startApp runs.

function updateCount() {
  const ideas = document.querySelectorAll("#idea-list li");
  const count = ideas.length;
  document.querySelector("#idea-count").textContent = `${count} ${count === 1 ? "idea" : "ideas"}`;
  document.querySelector("#empty-message").hidden = count > 0;
}

function addIdea(event) {
  event.preventDefault(); // Prevent the form from reloading the page.
  const input = document.querySelector("#idea-input");
  const idea = input.value.trim();
  if (idea === "") return;

  // Build the new list item safely with DOM methods.
  const item = document.createElement("li");
  item.classList.add("idea-item");

  const text = document.createElement("span");
  text.classList.add("idea-text");
  text.textContent = idea; // Treat typed input as plain text, not HTML.

  const actions = document.createElement("div");
  actions.classList.add("actions");
  // This HTML is safe here because it is a fixed string, not user input.
  actions.innerHTML = `<button type="button" class="review-btn">Review</button>
                       <button type="button" class="delete-btn">Delete</button>`;

  item.appendChild(text);
  item.appendChild(actions);
  document.querySelector("#idea-list").appendChild(item);

  input.value = "";
  input.focus();
  updateCount();
}

function handleIdeaClick(event) {
  // One listener on the permanent list handles buttons added later.
  const item = event.target.closest("li");
  if (!item) return;

  if (event.target.matches(".delete-btn")) {
    item.remove();
    updateCount();
  } else if (event.target.matches(".review-btn")) {
    item.classList.toggle("reviewed");
    event.target.textContent = item.classList.contains("reviewed") ? "Undo" : "Review";
  }
}

async function loadQuote() {
  const output = document.querySelector("#quote-output");
  const button = document.querySelector("#quote-button");
  output.textContent = "Loading inspiration...";
  button.disabled = true;

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json(); // JSON -> JavaScript object.
    // Use textContent for external data as well as user input.
    output.textContent = `“${data.quote}” — ${data.author}`;
  } catch (error) {
    console.error("Quote request failed:", error);
    output.textContent = "Couldn't load a quote. Check your connection and try again.";
  } finally {
    button.disabled = false;
  }
}

function startApp() {
  document.querySelector("#idea-form").addEventListener("submit", addIdea);
  document.querySelector("#idea-list").addEventListener("click", handleIdeaClick);
  document.querySelector("#quote-button").addEventListener("click", loadQuote);
  updateCount();
}

// "defer" ensures this script runs after HTML parsing, so initialization is safe.
startApp();
// Alternative without defer: document.addEventListener("DOMContentLoaded", startApp);
