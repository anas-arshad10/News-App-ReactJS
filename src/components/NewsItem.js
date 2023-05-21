import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">

            <div className="card" >
                <span className="badge rounded-pill bg-danger" style={{ display: "flex", position: "absolute", justifyContent: "flex-end", right: 0 }}> {source} </span>
                <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/hQgwvxiu89tZr73687st0NUap9E=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/21869421/akrales_200904_4160_0135.0.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} On {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
