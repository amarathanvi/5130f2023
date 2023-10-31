var info = [
    'fname', 
    'lname',
    'email',
    
    'stock-1',
    'invest-1',

    'fact-1',


];

// Load Form
for (let i = 0; i < INPUTS.length; i++) {
    getItem(INPUTS[i]);
}

// Display user details
if (document.getElementById("fname").value) {
    document.getElementById("profile-name").textContent = localStorage.getItem("fname");
}
if (document.getElementById("lname").value) {
    document.getElementById("lname").textContent = localStorage.getItem("lname");
}
if (document.getElementById("email").value) {
    document.getElementById("email").textContent = localStorage.getItem("email");
}
if (localStorage.getItem("basic-file")) {
    document.getElementById("file").src = localStorage.getItem("basic-file");
}
function setItem(elementID) {
    var element = document.getElementById(elementID);
    var value = element.value;
    localStorage.setItem(elementID, value);
}

function getItem(elementID) {
    var element = document.getElementById(elementID);
    var value = localStorage.getItem(elementID);
    element.value = value;
}

// Save Form
function storeValues() {
    for (let i = 0; i < info.length; i++) {
        info(INPUTS[i]);
    }

    
    // File
    const file = document.getElementById("basic-file").files[0];
    const reader = new FileReader();

    // convert image file to base64 string
    reader.addEventListener("load", () => { 
        // console.log(reader.result); 
        localStorage.setItem("basic-file", reader.result);
     }, false);

    if (file) { 
        reader.readAsDataURL(file);
    }

    alert("Saved the form!");
    console.log("Saved the form!");
    location.reload();
}


