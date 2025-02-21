document.addEventListener("DOMContentLoaded", function () {
    const userBtn = document.getElementById("user-btn");
    const lawyerBtn = document.getElementById("lawyer-btn");

    userBtn.addEventListener("click", function () {
        userBtn.classList.add("selected");
        lawyerBtn.classList.remove("selected");
    });

    lawyerBtn.addEventListener("click", function () {
        lawyerBtn.classList.add("selected");
        userBtn.classList.remove("selected");
    });

    document.getElementById("signup-btn").addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = userBtn.classList.contains("selected") ? "User" : "Lawyer";

        if (email && password) {
            alert(`Signed up as ${role} with email: ${email}`);
        } else {
            alert("Please enter email and password!");
        }
    });
});
