import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general"

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Heading footballs caused Nobby Stiles' brain disease, coroner finds",
      description:
        "England 1966 World Cup winner Nobby Stiles died with a condition caused by heading footballs, his inquest concludes.",
      url: "http://www.bbc.co.uk/news/articles/c5yzyygmxvgo",
      urlToImage:
        "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/08de/live/a1e11430-7c4b-11f1-b92f-f7be89c06628.jpg",
      publishedAt: "2026-07-15T18:37:38.5344391Z",
      content:
        'The coroner, recording the cause of Stiles\' death as Alzheimer\'s disease with "high stage" CTE, also said a condition known as "stage three limbic predominant age related TDP-43" had been a contribut… [+1259 chars]',
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Pete Thamel",
      title: "NC State's Doeren says QB Bailey could be best in country - ESPN",
      description:
        "Few quarterbacks in college football are better positioned for a breakthrough 2026 season than NC State's CJ Bailey.",
      url: "https://www.espn.com/college-football/story/_/id/49368386/nc-state-doeren-says-qb-bailey-best-country",
      urlToImage:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F1102%2Fr1569443_1296x729_16%2D9.jpg",
      publishedAt: "2026-07-15T18:03:30Z",
      content:
        "CHARLOTTE, N.C. -- Few quarterbacks in college football are better positioned for a breakthrough 2026 season than NC State's CJ Bailey.\r\nThe NC State junior enters his third season as a starter with … [+4041 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Annabelle Dickson, Sonja Rijnen",
      title:
        "Football might be coming home — but Prince William is staying home (for now) - Live Updates - POLITICO",
      description:
        "Kensington Palace confirmed to POLITICO that “the Prince of Wales will only attend the World Cup if England make it to the final.”",
      url: "https://www.politico.com/live-updates/2026/07/15/world-cup-2026/england-world-cup-prince-william-00998906",
      urlToImage:
        "https://www.politico.com/dims4/default/b1d96cc/2147483647/resize/1200x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F0c%2F8c%2F482ba49f462b8304bf73c216e8f8%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2162032021",
      publishedAt: "2026-07-15T17:45:00+00:00",
      content:
        "Kensington Palace confirmed to POLITICO that “the Prince of Wales will only attend the World Cup if England make it to the final.”",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Kevin Hand, Patrick Keddie",
      title: "England vs Argentina LIVE: FIFA World Cup 2026 semifinal",
      description:
        "Live coverage and text updates as England and Argentina renew one of football’s great rivalries in the semifinal.",
      url: "https://www.aljazeera.com/sports/liveblog/2026/7/15/england-vs-argentina-live-fifa-world-cup-2026-semifinal",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2026/07/reuters_6a57bda2-1784135074.jpg?resize=1920%2C1440",
      publishedAt: "2026-07-15T15:30:13Z",
      content: null,
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: "Dan Parr",
      title:
        "Fantasy football WR rankings for 2026 NFL season: Draft tiers and analysis",
      description:
        "In advance of the 2026 NFL fantasy football season, Dan Parr reveals his wide receiver rankings and tiers to help you prepare for your drafts. Who's No. 1? Where does A.J. Brown land after being traded to the Patriots?",
      url: "https://www.nfl.com/news/fantasy-football-wr-rankings-for-2026-nfl-season-draft-tiers-and-analysis",
      urlToImage:
        "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/mdvozqyv5x3z21jswsko",
      publishedAt: "2026-07-15T14:49:24Z",
      content:
        "Training camp is almost here, which means it's time to prepare for fantasy football drafts. With that in mind, I'm taking a look at the four main fantasy positions in the game -- quarterback, running… [+148 chars]",
    },
    {
      source: {
        id: "le-monde",
        name: "Le Monde",
      },
      author: "Alexandre Lemarié, Denis Ménétrier",
      title:
        "2026 World Cup: How France's American dream built up speed – and crashed",
      description:
        "France fell hard to Spain on Tuesday in the semifinals of the football tournament, marking a cruel and unexpected ending for Didier Deschamps' squad, who had delighted supporters since the start of the competition.",
      url: "https://www.lemonde.fr/en/sports/article/2026/07/15/2026-world-cup-how-france-s-american-dream-built-up-speed-and-crashed_6755503_9.html",
      urlToImage:
        "https://img.lemde.fr/2026/07/14/0/0/3511/2341/1440/960/60/0/9b3b29f_ftp-1-jwxcbxzawtut-83010e8ceebb4ed6ad778069e6da5beb-1-ab8db5bd79784b98b15e428f0ebe3548.jpg",
      publishedAt: "2026-07-15T14:30:11Z",
      content:
        "French forward Kylian Mbappé (left) battles with Spain's Pedro Porro and Pau Cubarsi during the World Cup semifinal between France and Spain, in Dallas, Texas, on July 14, 2026. ASHLEY LANDIS/AP\r\nSpe… [+1259 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Andrea Adelson",
      title:
        "ACC implements new tiebreaker policy for football title game - ESPN",
      description:
        "The ACC has a new tiebreaker policy for its football championship game in a move that commissioner Jim Phillips said allows the league to feature its two best teams.",
      url: "https://www.espn.com/college-football/story/_/id/49366844/acc-implements-new-tiebreaker-policy-football-title-game",
      urlToImage:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F1216%2Fr1590173_1296x729_16%2D9.jpg",
      publishedAt: "2026-07-15T14:24:39Z",
      content:
        "CHARLOTTE -- After a five-way tie for second place put Duke in the ACC championship game over higher-ranked Miami last season, a new tiebreaker policy was announced Wednesday in a move that commissio… [+1965 chars]",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: "NFL",
      title: "Honors 2026 Sponsors",
      description:
        "The official source for NFL news, video highlights, fantasy football, game-day coverage, schedules, stats, scores and more.",
      url: "https://www.nfl.com/news/honors-2026-sponsors",
      urlToImage:
        "https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.png",
      publishedAt: "2026-07-15T06:00:55Z",
      content:
        "As we hurtle toward the 2026 NFL season, Nick Shook breaks down the top NFC South training camp storylines to monitor for the Atlanta Falcons, Carolina Panthers, New Orleans Saints and Tampa Bay Bucc… [+6 chars]",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: "NFL",
      title: "NFL Honors 2026 | Who will take home this year's biggest awards?",
      description:
        "The official source for NFL news, video highlights, fantasy football, game-day coverage, schedules, stats, scores and more.",
      url: "https://www.nfl.com/news/nfl-honors-2026-who-will-take-home-this-year-s-biggest-awards",
      urlToImage:
        "https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.png",
      publishedAt: "2026-07-15T05:48:06Z",
      content:
        "As we hurtle toward the 2026 NFL season, Nick Shook breaks down the top NFC South training camp storylines to monitor for the Atlanta Falcons, Carolina Panthers, New Orleans Saints and Tampa Bay Bucc… [+6 chars]",
    },
    {
      source: {
        id: "abc-news-au",
        name: "ABC News (AU)",
      },
      author: null,
      title: "Disgraced footballer Nicky Winmar removed from AFL Hall of Fame",
      description:
        "Winmar was found guilty earlier this month of three counts of unlawful assault and common law assault.",
      url: "https://www.abc.net.au/news/2026-07-15/nicky-winmar-disgraced-removed-from-afl-hall-of-fame/106918768",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/3c093a075127006d8227392109d6f6e5?impolicy=wcms_watermark_news&cropH=2813&cropW=5000&xPos=0&yPos=0&width=862&height=485&imformat=generic",
      publishedAt: "2026-07-15T04:18:17Z",
      content:
        "Disgraced ex-Australian Rules footballer Nicky Winmar has been removed from the Australian Football Hall of Fame.\r\nEarlier this month, Winmar was found guilty of three counts of unlawful assault and … [+1232 chars]",
    },
    {
      source: {
        id: "bleacher-report",
        name: "Bleacher Report",
      },
      author: "David Kenyon",
      title: "Unique Stats from the 2023 College Football Regular Season",
      description:
        "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
      url: "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
      urlToImage:
        "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
      publishedAt: "2023-12-12T12:00:00Z",
      content:
        "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]",
    },
    {
      source: {
        id: "talksport",
        name: "TalkSport",
      },
      author: "161385360554578",
      title:
        "Rice rescues Arsenal, Pep slams Carragher and Neville, Ten Hag bans journalists",
      description:
        "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Decl…",
      url: "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      publishedAt: "2023-12-06T13:27:15Z",
      content:
        "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1095 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    console.log("hello i am constructor");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews() {

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f19e5e69ff044d4b22df64f003b5302&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f19e5e69ff044d4b22df64f003b5302&page=1&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data = await fetch(url)
    //   let parsedData = await data.json()
    //   console.log(parsedData)
    //   this.setState({articles : parsedData.articles, 
    //     totalResults:parsedData.totalResults,
    //   loading: false
    // })
    this.updateNews();
  }
  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f19e5e69ff044d4b22df64f003b5302&pageSize=${this.props.pageSize}&page=${this.state.page -1}`
    // this.setState({loading:true})

    // let data = await fetch(url)
    // let parsedData = await data.json()
    // console.log(parsedData)
    // this.setState({
    //   page: this.state.page-1,
    //   articles : parsedData.articles,
    //   loading: false
    // })
    console.log("prev")
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }
  handleNextClick = async () => {
    // if(!(this.state.page +1>Math.ceil(this.state.totalResults/20))){



    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f19e5e69ff044d4b22df64f003b5302&pageSize=${this.props.pageSize}&page=${this.state.page +1}`
    //     this.setState({loading:true})
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     console.log(parsedData)

    //     this.setState({
    //       page: this.state.page+1,
    //       articles : parsedData.articles,
    //       loading:false
    //     })
    //     console.log("next")

    // }

    this.setState({
      page: this.state.page + 1
    })
    this.updateNews();
  }
   fetchMoreData = async () => {
   
    this.setState({page: this.state.page +1 })
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f19e5e69ff044d4b22df64f003b5302&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };
  render() {
    return (
      <>
     
     
        <h2 className="text-center my-3">NewsMonkey- Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        {this.state.loading && <Spinner />}
        
           <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          { this.state.articles.map((element) => {

            return <div className="col-md-4 " key={element.url}>
              <NewsItem
                title={(element.title ? element.title.slice(0, 44) : " ") + "...."}
                description={(element.description ? element.description.slice(0, 88) : " ") + "...."}
                ImageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>;
          })}
        </div>
        </div>
          </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      
       </>
    );
  }
}

export default News;
