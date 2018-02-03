<?php 
	require_once('Config.php');

	class Database {
		public static function connexionBDD() {
			try{
	  		$options = array( PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',);
	   		$bdd = new PDO('mysql:host='.HOST.';dbname='.BDD,USER,PSWD, $options);	
			}
			catch (Exception $e){
				die('Erreur: '.$e->getMessage());
			}
			return $bdd;
		}
	}
?>