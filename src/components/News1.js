import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News1 = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capti = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updatenews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)

        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(75);

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }



    useEffect(() => {
        document.title = `${capti(props.category)}- EverySecNews`;
        updatenews();
      //  eslint-disable-next-line
    },[])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
    }

    return (
        <>
            <div className="conatiner my-3">


                <center>
                    <h1 className="text-center" style={{ margin: '35px 0px',marginTop: '90px' ,background: 'red',width:'500px',height:'54px',borderRadius:'22px',color:'white'}}>
                        {capti(props.category)}
                    </h1>
                </center>
                {loading && <center><Spinner /></center>}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<center><Spinner /></center>}

                >

                    <div className="container md-3">

                        <div className="row">

                            {articles.map((element) => {
                                return <div className="col-md-4 " key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 80) :""}

                                        description={element.description ? element.description.slice(0, 70) :""}

                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author }
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>

            </div>
        </>

    )
}


News1.defaultProps =
{
    country: 'in',
    pageSize: 6,
    category: 'general'
}
News1.propTypes =
{
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News1