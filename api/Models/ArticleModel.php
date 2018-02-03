<?php

require_once('../Database.php');

class ArticleModel {

	public static function getAllArticles(){
		$bdd = Database::connexionBDD();
		$result = [];

		$req_active = $bdd->prepare("SELECT * FROM `articles_2018` ORDER BY `title`");
		$req_active->execute();

		$result = $req_active->fetchAll();

		return $result;
	}

	public static function getArticleById($id){
		$bdd = Database::connexionBDD();
		$result = [];

		$req_active = $bdd->prepare("SELECT * FROM `articles_2018` WHERE `id`=:id");
		$req_active->bindParam(':id', $id, PDO::PARAM_STR);
		$req_active->execute();

		$result = $req_active->fetch(PDO::FETCH_ASSOC);

		return $result;
	}
}

?>