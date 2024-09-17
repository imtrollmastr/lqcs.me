// Predefined list of items with text and links
const data = [
    { text: "Liquacious Homepage", url: "https://liquacious.org/" },
    { text: "Liquacious Newspaper", url: "https://liquacious.org/newspaper" },
    { text: "Liquacious Blog", url: "https://liquacious.org/blog" },
    { text: "Liquacious Student Resources", url: "https://liquacious.org/resources" },
    { text: "ISF Grade 5 Advancement Festivities", url: "https://liquacious.org/grade5" },
    { text: "Non-profit Articles", url: "https://liquacious.org/articles" },
    { text: "Online News for Students", url: "https://liquacious.org/online-news" }
];

// Function to display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        results.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('result-item');
            
            // Create a clickable link
            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.text;
            link.target = "_blank"; // Opens link in new tab
            
            div.appendChild(link);
            resultsContainer.appendChild(div);
        });
    }
}

// Search function
function search(query) {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter(item => item.text.toLowerCase().includes(lowerCaseQuery));
}

// Handle form submission
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    const query = document.getElementById('searchInput').value;
    const results = search(query);
    displayResults(results);
});
