<?php
	$email=bin2hex('email');
	$phone=bin2hex('phone');
	$name=bin2hex('name');
	$action=$_GET['action'];
    $db = mysqli_connect('sql222.main-hosting.eu', 'u408327831_admin', '12345@54321', 'u408327831_db1');
	
	if(isset($_COOKIE[$phone])){
		//header('Location:../accounts/index');		
		echo 'Already Login';
	}else{
		if($action=='login'){
			if($_SERVER["REQUEST_METHOD"] == "POST") {
			  // username and password sent from form 
			  
			  $myemail = mysqli_real_escape_string($db,$_POST['email']);
			  $pass = mysqli_real_escape_string($db,$_POST['pass']); 
			  $mypassword=bin2hex($pass);
			  
			  $sql = "SELECT * FROM users WHERE phone = '$myemail' and password = '$mypassword'";
			  $result = mysqli_query($db,$sql);
			  $row = mysqli_fetch_array($result);
			  $myphone = $row['phone'];
			  $myname = $row['name'];
			  $role = $row['role'];
			  
			  $count = mysqli_num_rows($result);
			  
			  // If result matched $myusername and $mypassword, table row must be 1 ro
			  if($count == 1) {
				$name=bin2hex('name');
				$kemail = bin2hex($myemail);
				$kphone = bin2hex($myphone);
				$kname = bin2hex($myname);
				setcookie($email, $kemail, time() + (86400 * 30), "/"); // 86400 = 1 day
				setcookie($phone, $kphone, time() + (86400 * 30), "/"); // 86400 = 1 day
				setcookie($name, $kname, time() + (86400 * 30), "/"); // 86400 = 1 day
				setcookie('task', $role, time() + (86400 * 30), "/"); // 86400 = 1 day
				
					if($role==1){
						header('location:../admin-pannel/');
					}else{
					 header("location: ../accounts/");
					}
			  }else {
				 $error = "Your Login Name or Password is invalid";
				 echo '<script language="javascript"> 
				 alert("Please Check Login Details again");</script>';
			  }
			}
	    }if($action=='register'){
			if($_SERVER["REQUEST_METHOD"] == "POST") {  		  
				  $myname = mysqli_real_escape_string($db,$_POST['name']);
				  $myphone = mysqli_real_escape_string($db,$_POST['phone']);
				  $myemail = mysqli_real_escape_string($db,$_POST['email']);
				  $password = mysqli_real_escape_string($db,$_POST['pass']);	
				  $mypassword = bin2hex($password);
				  //$mypassword=hash('sha256',$password);		  
		  
				  $sql = "SELECT * FROM users WHERE phone = '$myphone'";
				  $result = mysqli_query($db,$sql);
				  $count = mysqli_num_rows($result);
				  if($count == 1) {
					  echo '<script language="javascript"> 
					 alert("Mobile Already Exists");</script>';
				 }else{
					 $insert = "INSERT INTO `users` (email,phone,name,password)VALUES('$myemail','$myphone','$myname','$mypassword')";
				 }if(mysqli_query($db,$insert)==true){		 
			
					$kemail = bin2hex($myemail);
					$kphone = bin2hex($myphone);
					$kname = bin2hex($myname);
					setcookie($email, $kemail, time() + (86400 * 30), "/"); // 86400 = 1 day
					setcookie($phone, $kphone, time() + (86400 * 30), "/"); // 86400 = 1 day
					setcookie($name, $kname, time() + (86400 * 30), "/"); // 86400 = 1 day
					header("location: ../accounts/index");
					}else {
					 echo '<script language="javascript"> 
					 alert("Something Went Wrong");</script>';
					}
			 
				}
		
			}
		}
?>