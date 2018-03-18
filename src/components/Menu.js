import React, { Component } from 'react';

import './../css/App.css';
import './../css/Menu.css';

import { Link } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category1 : { id: "1", tag: "serendipite" },
            category2 : { id: "1", tag: "experience_sonore" },
            category3 : { id: "1", tag: "realite_virtuelle" },
            category4 : { id: "1", tag: "set_design" },
            category5 : { id: "1", tag: "art_informatique" },
            category6 : { id: "1", tag: "palette_numerique" },
            category7 : { id: "1", tag: "films_non_fictifs" },
            category8 : { id: "1", tag: "motion_design" },
            category9 : { id: "1", tag: "expositions" },
            category10 : { id: "1", tag: "culture_logiciels_3D" },
            category11 : { id: "1", tag: "direction_artistique" }
        };
    }

    componentDidMount() {
        var _this = this;
        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category1.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category1 : {id: "1" }})
                }
                else {
                  _this.setState({ category1: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category2.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category2 : {id: "1" }})
                }
                else {
                  _this.setState({ category2: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category3.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category3 : {id: "1" }})
                }
                else {
                  _this.setState({ category3: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category4.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category4 : {id: "1" }})
                }
                else {
                  _this.setState({ category4: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category5.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category5 : {id: "1" }})
                }
                else {
                  _this.setState({ category5: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category6.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category6 : {id: "1" }})
                }
                else {
                  _this.setState({ category6: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category7.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category7 : {id: "1" }})
                }
                else {
                  _this.setState({ category7: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category8.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category8 : {id: "1" }})
                }
                else {
                  _this.setState({ category8: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category9.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category9 : {id: "1" }})
                }
                else {
                  _this.setState({ category9: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category10.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category10 : {id: "1" }})
                }
                else {
                  _this.setState({ category10: {id: data} })
                }
        });

        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : _this.state.category11.tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
                if(data == null) {
                  _this.setState({ category11 : {id: "1" }})
                }
                else {
                  _this.setState({ category11: {id: data} })
                }
        });
    }

  render() {
    return (
      <div className="Menu scrollContentMenu">
        <div class="copyright">
          Site réalisé par Irène Burlet et Coralie Goldbaum.
        </div>
        <div className="list">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={`/article/${this.state.category1.id}`}>Sérendipité</Link></li>
              <li><Link to={`/article/${this.state.category2.id}`}>Expérience Sonore</Link></li>
              <li><Link to={`/article/${this.state.category3.id}`}>Réalité Virtuelle</Link></li>
              <li><Link to={`/article/${this.state.category4.id}`}>Set Design</Link></li>
              <li><Link to={`/article/${this.state.category5.id}`}>Art Informatique</Link></li>
              <li><Link to={`/article/${this.state.category6.id}`}>Palette Numérique</Link></li>
              <li><Link to={`/article/${this.state.category7.id}`}>Films Non Fictifs</Link></li>
              <li><Link to={`/article/${this.state.category8.id}`}>Motion Design</Link></li>
              <li><Link to={`/article/${this.state.category9.id}`}>Expositions</Link></li>
              <li><Link to={`/article/${this.state.category10.id}`}>Culture des Logiciels 3D</Link></li>
              <li><Link to={`/article/${this.state.category11.id}`}>Direction Artistique</Link></li>
              <li><Link to="/article">Tous les articles</Link></li>
          </ul>
          </div>
          <div class="explanations">
            Choisissez une catégorie et découvrez un article au hasard.
          </div>
      </div>
      );
}
}

export default Menu;
