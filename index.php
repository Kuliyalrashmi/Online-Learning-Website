<?php
// Include PHPMailer for sending emails
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Establish database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "student";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Register new user
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];

    if ($password == $confirmPassword) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashedPassword')";
        
        if ($conn->query($sql) === TRUE) {
            header("Location: login.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Passwords do not match";
    }
}

// Login user
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            header("Location: home.html");
            exit();
        } else {
            echo "Invalid email or password";
        }
    } else {
        echo "Invalid email or password";
    }
}

// Send newsletter
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["newsletter"])) {
    $to = $_POST["email"];
    $subject = "Newsletter Registration";
    $body = "You have been registered for newsletters, get email updates on our latest updates and stay connected with us";

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.ethereal.email';
        $mail->Port = 587;
        $mail->SMTPAuth = true;
        $mail->Username = 'ricardo.wiegand71@ethereal.email';
        $mail->Password = 'HZJEFdCXbhhYTCCkf5';
        $mail->setFrom('ricardo.wiegand71@ethereal.email', 'Mailer');
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        echo "Email sent successfully";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

$conn->close();
?>
