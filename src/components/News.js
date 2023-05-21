import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  document.title = `${props.category} - NewsApp`;

  /* handlePrevClick = async () => {

  setPage( page - 1 );
  updateNews();
}

handleNextClick = async () => {
  setPage( page + 1 );
  updateNews();
} */

  const updateNews = async (currentPage) => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cbd1dc15e619454f8fee23954d3dae3c&page=${currentPage}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews(page);
  }, [page]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    updateNews(nextPage);
  };

  return (
    <>
      <h1 className='text-center'>News App - Top {props.category} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4><Spinner /></h4>}
      >
        <div className="container">
          <div className="text-center row">
            {articles.map((element, index) => (
              <div className="col-md-4" key={`${element.url}-${index}`}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
          {/*       <div className="text-center row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} 
              newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
        </div>
          })}
        </div> */}

        </div>
      </InfiniteScroll>
      {/*    <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
            Previous
          </button>
          <button disabled={page + 1 > Math.ceil(state.totalResults / props.pageSize)} 
          type="button" className="btn btn-dark" onClick={handleNextClick}>
            Next
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

