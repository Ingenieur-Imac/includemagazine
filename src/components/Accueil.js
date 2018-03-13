import React, { Component } from 'react';
import sketch from './../js/sketch.js';

import './../css/Accueil.css';

import { Link } from 'react-router-dom'

class Accueil extends Component {
  render() {
    return (
      <div className="Accueil">
        <div className="imgContainer">
         <img src="http://2018.include.ingenieur-imac.fr/img/Accueil.jpg" alt="Frieder Nake"/>
        </div>
        <div className="editoContainer scrollContent">
          <h1>INCLUDE 2018</h1>
          <p>INCLUDE est un magazine de culture visuelle au croisement des arts et de la technologie. Cette année, pour sa troisième édition, le magazine évolue pour vous proposer, en plus de sa publication papier, une édition en ligne. Avec deux fois plus d’articles, INCLUDE en ligne étend le champs des sujets abordés.<br/><br/>

          Dans ce numéro, nous vous proposons une réflexion sur notre manière d’appréhender l’art. Plus précisément, sur le fait de vivre une expérience face à une oeuvre, que ce soit du point de vue de l’artiste ou de l’observateur. Ce sont notamment les nouvelles technologies qui ont permis aujourd’hui de changer la perception que l’on a de l’art. Alors que l’on peut imprimer en 3D une sculpture égyptienne directement chez soi ou visiter un musée en réalité virtuelle, elle rend l’art accessible n’importe où, n’importe quand. La technologie ouvre également l’art à de nouvelles dimensions. Elle joue avec nos sens, modifiant notre perception et l’expérience que l’on a d’une oeuvre.<br/><br/>

          Les nouvelles technologies représentent également autant de nouveaux outils pour les artistes. Elles étendent les moyens d’expression et de diffusion. Elles évoluent au point que des intelligences artificielles composent des symphonies et peignent des tableaux par milliers. On peut alors se poser la question, lorsque la technique permet de s’affranchir de l’intervention humaine pour créer, de ce qui définit une oeuvre d’art. Dès 1917, Marcel Duchamp tentait déjà de répondre à cette question en donnant un statut d’oeuvre à un urinoir, réduisant son intervention au choix d’un objet manufacturé.<br/><br/>

          Conjuguer autrement le rapport art et technique nous a permis de repenser notre monde pour nous transposer dans cette utopie que nos ancêtres auraient pensé «inatteignable», comme pourrait l'écrire Stendhal.<br/><br/>

          Cette étroite relation entre les arts et la technologie qui existe aujourd’hui est l’héritage d’une longue collaboration entre artistes et ingénieurs. Il y a 50 ans, en 1968, se tenait à Londres l’exposition Cybernetic Serendipity. Cette exposition était la première aux Royaume-Uni dédiée à la relation entre les arts et les nouvelles technologies. La sérendipité est définit comme l’acte de créer par l’intermédiaire d’une découverte imprévue : une heureuse coïncidence accessible à quiconque étant assez curieux et observateur pour s’en saisir. Il y a donc un demi-siècle, à Londres comme à Zagreb avec New Tendencies, les premiers artistes “cybernétiques”, s’appuyant sur les principes de la sérendipité, marquèrent l’histoire de l’art numérique. Ainsi, 1968 est aussi une année de révolution pour l’art qui se verra à jamais bouleversé par le travail de ces précurseurs. L’utilisation de l’intelligence artificielle dans l’art aujourd’hui n’en est que le digne héritage.<br/><br/>

          Et si l’on vous disait que Duchamp était mort en 1968… hasard ou serendipité ?<br/><br/>

          Vous souhaitant une heureuse réflexion et une bonne lecture.<br/><br/>
        </p>
        <p id="hodor">
          <span>Arthur DUCOUX</span>
          <span>Joya HADDAD</span>
        </p> 

          <Link to="/serendipity" >Tester la sérendipité</Link>
        </div>     	
      </div>
    );
  }
}

export default Accueil;
