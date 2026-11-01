
let serverRunning = false;

function updateStatus() {
    document.getElementById("status").textContent =
        serverRunning ? "Zapnutý (simulace)" : "Vypnutý";
}

function startServer() {
    serverRunning = true;
    updateStatus();
}

function stopServer() {
    serverRunning = false;
    updateStatus();
}

function restartServer() {
    serverRunning = true;
    updateStatus();
}
