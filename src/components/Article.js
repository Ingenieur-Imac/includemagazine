import React, { Component } from 'react';

class Article extends Component {
	render() {
		return (
			<div className="Article">
			<p>{this.state.article.title}</p>
			</div>
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			article: {
				id: 1,
				title: "blabla",

			}
		};
	}

	componentDidMount() {
		var _this = this;
		fetch('http://localhost/includemagazine/api/Controllers/getArticleById.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json; charset=utf-8'
        },
        dataType: 'JSON',
        body: JSON.stringify({article : _this.props.match.params.id}),
        }).then(function(results) {
			return results.json();
		}).then(function(data){
          if(data[0] == "Error"){
            console.log(data[0]);
          }
          else {
          	console.log(data);
            _this.setState({ article: data })
          }
        });
	}

}


export default Article;
