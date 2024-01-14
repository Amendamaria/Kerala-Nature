document.addEventListener('DOMContentLoaded', function() {
    // Simulate content loading delay (remove this in a real scenario)
    setTimeout(function() {
        document.getElementById('loadingContainer').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Adjust the delay time as needed
});
