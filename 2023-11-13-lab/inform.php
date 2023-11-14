<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "user_details";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Process user information
    $username = $_POST["username"];
    $emailid = $_POST["emailid"];
    $password = $_POST["password"];
    $verification_code = $_POST["verification_code"];
    $verified = $_POST["verified"];

    $userlocation=$_POST["userlocation"];
    $weather =$_POST["weather"];
    $currency =$_POST["currency"];
    $language =$_POST["language"];





    
    // Insert data into the database
    $sql = "INSERT INTO user_data ( username, emailid, password, verification_code, verified, userlocation, weather, currency, language)
            VALUES ('$username', '$emailid','$password', '$verification_code', '$verified','$userlocation','$weather', '$currency', '$language')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>