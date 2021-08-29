<?php
$servername = "sql6.freemysqlhosting.net";
$username = "sql6433390"; // For MYSQL the predifined username is root
$password = "clmbUgTGqT"; // For MYSQL the predifined password is " "(blank)

// Create connection
$conn = new mysqli($servername, $username, $password);

 
// Check connection

 if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}
$sql= "SELECT name, acco, stocks, location from Accomodation"
$conn-> query($sql);

echo "Connected successfully";

?>