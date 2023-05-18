import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
constructor(){
  super();
  console.log("this is")
  this.state={
    articles: [],
    loading: false,
    page: 1
  }
}
async componentDidMount() {
  try {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  } catch (error) {
    console.log('Error:', error);
  }
}
handlePrevClick= async ()=>{
console.log("Previious");
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
this.setState({loading:true});  
let data = await fetch(url);
  let  parsedData = await data.json();
this.setState({
  page: this.state.page - 1,
  articles: parsedData.articles,
  loading: false
})
}

handleNextClick = async ()=>{
console.log("Next");
if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

}
else {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let  parsedData = await data.json();
this.setState({
  page: this.state.page + 1,
  articles: parsedData.articles,
  loading: false
})
}
}

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>News App - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="text-center row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>

          })}
            

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
