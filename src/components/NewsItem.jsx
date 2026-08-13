import { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let {title,description,ImageUrl,newsUrl, author, date}= this.props
    return (
      <div>
        <div className="card">
          <img src={ImageUrl?ImageUrl:"https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/257981_Techwoven_AJohnson_0002.jpg?quality=90&strip=all&crop=0%2C10.723165084465%2C100%2C78.55366983107&w=1200"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
             <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
