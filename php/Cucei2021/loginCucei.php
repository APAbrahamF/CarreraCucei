<?php 
	
	//adding dboperation file 
	require_once '../DbOperation.php';
	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$email = $obj['email'];
	
	$password = $obj['password'];
        $db = new DbOperation(); 
        if($db->login($email, $password)){
			echo json_encode("ok");
        }else{
			echo json_encode("nope");
        }
     
   //displaying the data in json 
?>