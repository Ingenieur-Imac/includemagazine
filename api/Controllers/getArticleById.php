<?php
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
	header('Content-Type: application/json;charset=utf-8');

	require_once("../Models/ArticleModel.php");

	// $article = "";
	// $data = array();

	// $json = json_decode(file_get_contents('php://input'), true);
	// if(!is_array($json)) $data = array("Error", "Error: Post");
	// else {
	// 	if(isset($json['article']) && $json['article'] != '') {
	// 		$article = $json['article'];
	// 		$data = ArticleModel::getarticleById($article);
	// 	}
	// 	else {
	// 		$data = array("Error", "Error: article");
	// 	}
	// }
	$data = array();
	$data['id'] = 1;
	$data['title'] = "Ceci est un titre";

	echo json_encode($data);

?>