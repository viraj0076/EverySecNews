import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3"  >

            <div className="card" style={{ height: "515px"}} >
                <div>
                    <span class="badge rounded-pill bg-" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', left: '0' ,background:'red'}}>
                        {source}
                    </span>
                </div>

                <img src={!imageUrl ? "https://images.unsplash.com/photo-1579532536935-619928decd08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG5ld3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : imageUrl} className="card-img-top" alt="..." style={{ height: "240px" }} />
                <div className="card-body"  >
                    <h5 className="card-title"> {title}... </h5>
                    <p className="card-text" >{description}...</p>
                    <p class="card-text"><small className="text-muted">By {author} On {new Date(date).toGMTString()}</small></p>
                    <center>
                    <a href={newsUrl} style={{background: 'red', fontFamily: 'Cairo',borderRadius:'105px'}}  className="btn btn-danger">Read More</a>
                        </center>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
