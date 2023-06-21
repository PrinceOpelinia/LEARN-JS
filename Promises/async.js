function getServerStatus() {
    const result = fetch("/server/status");

    // THIS WILL NOT WORK!
    console.log("The status from the server is: ", result.ok);
}
