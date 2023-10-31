function ShowHelloMessage() {
    var name = document.getElementById("firstName");
    document.getElementById("hellomessage").innerHTML = "Hello, " + name.value + ". Thanks for your feedback";
}
document.getElementById("submit").onclick = ShowHelloMessage;