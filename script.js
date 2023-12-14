const passwordField = document.getElementById("password")


document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send a POST request to the server to handle the login
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then(response => response.text())
        .then(data => {
            if (data === 'Login successful') {
                alert('Login successful!');
                window.location.href = "index.html";
                // Redirect to the user's profile page or update the UI as needed.
            } else {
                const errorMessage = document.getElementById("error-message");
                alert('account doesnt exist');
                errorMessage.textContent = data;
            }
        });
});







const handleMouseMove = event => {
    if (!document.querySelector("#password:is(:focus)") && !document.querySelector("#password:is(:user-invalid)")) {
        const eyes = document.getElementsByClassName('eye')

        for (let eye of eyes) {
            const x = eye.getBoundingClientRect().left + 10;
            const y = eye.getBoundingClientRect().top + 10;
            const rad = Math.atan2(event.pageX - x, event.pageY - y);
            const rot = (rad * (180 / Math.PI) * -1) + 180;

            eye.style.transform = `rotate(${rot}deg)`;
        }
    }
}

const handleFocusPassword = event => {
    document.getElementById('face').style.transform = 'translateX(30px)'
    const eyes = document.getElementsByClassName('eye')

    for (let eye of eyes) {
        eye.style.transform = `rotate(100deg)`;
    }
}

const handleFocusOutPassword = event => {
    document.getElementById('face').style.transform = 'translateX(0)'
    if (event.target.checkValidity()) {
        document.getElementById('ball').classList.toggle('sad')
    } else {
        document.getElementById('ball').classList.toggle('sad')
        const eyes = document.getElementsByClassName('eye')

        for (let eye of eyes) {
            eye.style.transform = `rotate(215deg)`;
        }
    }
}


document.addEventListener("mousemove", event => handleMouseMove(event))
passwordField.addEventListener('focus', event => handleFocusPassword(event))
passwordField.addEventListener('focusout', event => handleFocusOutPassword(event))

document.getElementById('submit').addEventListener("mouseover", event => document.getElementById('ball').classList.toggle('look_at'))
document.getElementById('submit').addEventListener("mouseout", event => document.getElementById('ball').classList.toggle('look_at'))

