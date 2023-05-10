import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor(){
  super();
  console.log("this is")
  this.state={
    articles: [],
    loading: false,
    page: 1
  }
}
async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=1pageSize=20";
  let data = await fetch(url);
  let  parsedData = await data.json();
  this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
}
handlePrevClick= async ()=>{
console.log("Previious");
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let  parsedData = await data.json();
this.setState({
  page: this.state.page - 1,
  articles: parsedData.articles
})
}

handleNextClick = async ()=>{
console.log("Next");
if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

}
else {
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=${this.state.page + 1}&pageSize=20`;
  let data = await fetch(url);
  let  parsedData = await data.json();
this.setState({
  page: this.state.page + 1,
  articles: parsedData.articles
})
}
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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page>=this.state.totalResults/20} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
