const pages = [
    { title: "Home", url: "index.html" },
    { title: "Animals", url: "/frontend/pages/Animals.html" },
    { title: "Monkeys", url: "/frontend/pages/Monkeys.html" },
    { title: "Oreo", url: "/frontend/pages/Oreo.html" },
    { title: "Tiger", url: "/frontend/pages/Tigers.html"},
    { title: "Sea-Turtles", url: "/frontend/pages/Sea-turtles.html"}
];

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Check if the Enter key is pressed
        event.preventDefault();  // Prevents any default form submission (if inside a form)
        performSearch();         // Call the search function
    }
});

function performSearch() {
    let query = document.getElementById("search-input").value.toLowerCase();
    let resultsList = document.getElementById("results");
    if (query === "") return;
    let results = pages.filter(page => page.title.toLowerCase().includes(query));
    if (results.length === 1) {
        // If only one result is found, navigate to that page
        window.location.href = results[0].url;
    } else {
        // If multiple results are found, display them
        resultsList.innerHTML = ""; // Clear previous results
        results.forEach(result => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${result.url}">${result.title}</a>`;
            resultsList.appendChild(li);
        });
    }
}
