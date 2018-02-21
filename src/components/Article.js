import React, { Component } from 'react';

import './../css/Article.css';

class Article extends Component {
	render() {
		return (
			<div className="Article">
				<section id="articleDescription">
					<div>
						<h1>{this.state.article.title}</h1>
						<p>{this.state.article.intro}</p>
					</div>
				</section>
				<section id="articleContent">
					<div className="scrollContent">
						<div>
							<p className="text1">{this.state.article.text1}</p>
							<img src={this.state.article.img1} alt={this.state.article.title} />
							{this.state.article.img3
								? <img src={this.state.article.img3} alt={this.state.article.title} />
								: null
							}
							{this.state.article.text3
								? <p>{this.state.article.text3}</p>
								: null
							}
						</div>
						<div>
							{this.state.article.img2
								? <img src={this.state.article.img2} alt={this.state.article.title} />
								: null
							}
							{this.state.article.text2
								? <p>{this.state.article.text2}</p>
								: null
							}
							{this.state.article.text4
								? <p>{this.state.article.text4}</p>
								: null
							}
							{this.state.article.img4
								? <img src={this.state.article.img4} alt={this.state.article.title} />
								: null
							}
						</div>
					</div>
				</section>
			</div>
		);
	}

	constructor(props) {
		super(props);
		this.state = {
			article: {
				id: 0,
				title: "",
				intro: "",
				author: "",
				text1: "",
				text2: "",
				text3: "",
				text4: "",
				img1: "",
				img2: "",
				img3: "",
				img4: ""
			}
		};
	}

	componentDidMount() {
		var _this = this;
		fetch('http://2018.include.ingenieur-imac.fr/api/Controllers/getArticleById.php', {
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
            _this.setState({ article: data })
          }
        });
	}

}


export default Article;
