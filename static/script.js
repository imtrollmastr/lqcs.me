const urlSubmitBox = document.getElementById("urlInput")
const hideButton = document.getElementById("hideButton")
const resultsContainer = document.getElementById('urlResult');

function hideURL(url) {
    let new_url = "https://lqcs.vercel.app/hide?u=" + url
    return new_url
}

function hideSubmitValue() {
    let hiddenUrl = hideURL(urlSubmitBox.value)
    const div = document.createElement('div');
    div.classList.add('result-item');
    // Create a clickable link
    const link = document.createElement('a');
    link.href = hiddenUrl;
    link.textContent = hiddenUrl;
    link.target = "_blank"; // Opens link in new tab

    div.appendChild(link);
    resultsContainer.appendChild(div);
}