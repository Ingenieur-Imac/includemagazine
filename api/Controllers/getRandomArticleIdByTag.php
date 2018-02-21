<?php
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
	header('Content-Type: application/json;charset=utf-8');

	require_once("../Models/ArticleModel.php");

	$tag = "";
	$data = array();

	$json = json_decode(file_get_contents('php://input'), true);
	if(!is_array($json)) $data = array("Error", "Error: Post");
	else {
		if(isset($json['tag']) && $json['tag'] != '') {
			$tag = $json['tag'];
			$articles = ArticleModel::getArticlesByTag($tag);
			$data = ArticleModel::getRandomArticleId($articles);
		}
		else {
			$data = array("Error", "Error: tag");
		}
	}

	echo json_encode($data);

?>