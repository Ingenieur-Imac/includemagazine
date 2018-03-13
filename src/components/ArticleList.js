import React, { Component } from 'react';
import Article from './Article'
import MainArticle from './MainArticle'

import './../css/App.css';
import './../css/ArticleList.css';

import { Link } from 'react-router-dom'

  


class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles : []
        };
    }

    componentDidMount() {
        var _this = this;
        fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getAllArticles.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
            dataType: 'JSON',
            body: JSON.stringify(),
        }).then(function(results) {
            return results.json();
        }).then(function(data){
          console.log(data);
            _this.setState({ articles : data})
        });
  }

  render() {
    return (
      <div className="ArticleList scrollContent">
          <ul>
            <li><Link to="/Menu">Back</Link></li>
              {this.state.articles.map(function(article, index) {
                return <li key={index}>
                        <Link to={`/article/${article.id}`}>
                          {article.title}
                        </Link>
                      </li>;
              })}
          </ul>
      </div>
      );
  }
}

export default ArticleList;
