import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor(){
  super();
  console.log("this is")
  this.state={
    articles: this.articles,
    loading: false
  }
}
async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=cbd1dc15e619454f8fee23954d3dae3c";
  let data = await fetch(url);
  let  parsedData = await data.json();
  this.setState({articles: parsedData.articles})
}

  render() {
    return (
      <div className="container my-3">
        <h2>News App - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>

          })}
            

        </div>
      </div>
    )
  }
}

export default News
