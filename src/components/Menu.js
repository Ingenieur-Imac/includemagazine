import React, { Component } from 'react';
import Article from './Article'
import MainArticle from './MainArticle'

import './../css/App.css';
import './../css/Menu.css';

import { Link } from 'react-router-dom'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category1 : { id: "0", tag: "serendipite" },
            category2 : { id: "0", tag: "experience_sonore" },
            category3 : { id: "0", tag: "realite_virtuelle" },
            category4 : { id: "0", tag: "set_design" },
            category5 : { id: "0", tag: "art_informatique" },
            category6 : { id: "0", tag: "films_non_fictifs" },
            category7 : { id: "0", tag: "motion_design" }
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
                _this.setState({ category1: {id: data} })
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
                _this.setState({ category2: {id: data} })
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
                _this.setState({ category3: {id: data} })
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
                _this.setState({ category4: {id: data} })
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
                _this.setState({ category5: {id: data} })
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
                _this.setState({ category6: {id: data} })
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
                _this.setState({ category7: {id: data} })
        });
    }

  render() {
    return (
      <div className="Menu">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={`/article/${this.state.category1.id}`}>Sérendipité</Link></li>
              <li><Link to={`/article/${this.state.category2.id}`}>Expérience Sonore</Link></li>
              <li><Link to={`/article/${this.state.category3.id}`}>Réalité Virtuelle</Link></li>
              <li><Link to={`/article/${this.state.category4.id}`}>Set Design</Link></li>
              <li><Link to={`/article/${this.state.category5.id}`}>Art Informatique</Link></li>
              <li><Link to={`/article/${this.state.category6.id}`}>Films Non Fictifs</Link></li>
              <li><Link to={`/article/${this.state.category7.id}`}>Motion Design</Link></li>
          </ul>
      </div>
      );
}
}

export default Menu;
