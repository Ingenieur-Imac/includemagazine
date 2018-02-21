import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Article from './Article'
import MainArticle from './MainArticle'

import './../css/Menu.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {
    getRandomArticleIdByTagFetch = function(tag) {
        var id = "100000";
        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify({tag : tag}),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
            if(data[0] == "Error"){
                console.log(data[0]);
            }
            else {
                console.log(data);
                id= data.toString();
            }
        });
        console.log(id);
        return id;
  }

    constructor(props) {
        super(props);
        this.state = {
            category1 : { id: "0", tag: "computer_art" },
            category2 : { id: "0", tag: "computer_art" },
            category3 : { id: "0", tag: "computer_art" },
            category4 : { id: "0", tag: "computer_art" },
            category5 : { id: "0", tag: "computer_art" },
            category6 : { id: "0", tag: "computer_art" },
            category7 : { id: "0", tag: "computer_art" },
            category8 : { id: "0", tag: "computer_art" },
            category9 : { id: "0", tag: "computer_art" },
            category10 : { id: "0", tag: "computer_art" },
            category11 : { id: "0", tag: "computer_art" }
        };
    }

    componentDidMount() {
        var _this = this;
        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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
                _this.setState({ category8: {id: data} })
        });

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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
                _this.setState({ category9: {id: data} })
        });

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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
                _this.setState({ category10: {id: data} })
        });

        fetch('http://localhost/includemagazine/api/Controllers/getRandomArticleIdByTag.php', {
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
                _this.setState({ category11: {id: data} })
        });
    }

  render() {
    return (
      <div className="Menu">
          <div>
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
              </ul>
          </div>
      </div>
      );
}
}

export default Menu;
