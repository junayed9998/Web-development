document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    // Simulate successful login
    window.location.href = "student-profile.html"; // or "teacher-profile.html" based on role
});

document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registration successful! Please login.");
    window.location.href = "index.html";
});

function logout() {
    alert("You have logged out.");
    window.location.href = "index.html";
}
