<?php
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
	header('Content-Type: application/json;charset=utf-8');

	// include "../Models/ArticleModel.php";

	// $data = array();
	// echo "hey je suis là";
	// $data = ArticleModel::getAllArticles();
 // 	echo json_encode($data);
	$data = array();
	$data['id'] = 1;
	$data['title'] = "Ceci est un titre";

	echo json_encode($data);
 	
?>