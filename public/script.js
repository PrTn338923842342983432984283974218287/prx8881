document.getElementById('proxy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;
    fetch(`/proxy?url=${encodeURIComponent(url)}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('proxy-frame').srcdoc = data;
        })
        .catch(error => console.error('Error:', error));
});
