window.onload = () => {
    console.log('SCRIPT LOADED SUCCESSFULLY');
}

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('prevented a default event on this form');
});