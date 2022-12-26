import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class news extends Component {
  articles = [
    {
      "source": {
        "id": "talksport",
        "name": "TalkSport"
      },
      "author": "Jackson Cole",
      "title": "Freddie Flintoff airlifted to hospital following car crash while filming Top Gear, England cricket...",
      "description": "The England cricket legend was shooting an episode of the BBC series at Dunsfold Park aerodrome in Surrey on Tuesday when the accident occurred. ",
      "url": "https://talksport.com/sport/cricket/1276705/freddie-flintoff-airlifted-hospital-car-crash-top-gear/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2015/10/ff.jpg?strip=all&quality=100&w=700&h=420&crop=1",
      "publishedAt": "2022-12-13T22:16:01Z",
      "content": "Freddie Flintoff was airlifted to hospital following a car crash during filming for Top Gear in Surrey on Monday. \r\nThe England cricket legend was shooting an episode of the BBC series at Dunsfold Pa… [+1980 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Avani Dias, Som Patidar",
      "title": "India's gender pay gap is among the worst in the world. But the women's cricket team hopes to change that",
      "description": "India is the second country in the world to introduce pay parity for its men's and women's cricket teams. Now there are calls for Australia to do the same.",
      "url": "http://www.abc.net.au/news/2022-12-14/india-womens-cricket-team-will-now-be-paid-same-as-men/101763840",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/57f770789f82ee80dc019c26d1bd90a4?impolicy=wcms_crop_resize&cropH=1382&cropW=2458&xPos=2&yPos=158&width=862&height=485",
      "publishedAt": "2022-12-13T19:01:53Z",
      "content": "India's women's cricket captain Harmanpreet Kaur is a household name who has smashed international records, but like most women in the world, she's been underpaid.\r\nLast week, when Kaur led her team … [+9643 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: "false",
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b8527464a8d4babbc4ef818a38fc205"
    let data = await fetch(url);
    let parseddata = await data.json()
    this.setState({ article: parseddata.articles })
  }
  render() {
    return (
      <div className='container my-3'>
        <div className="row">
          {this.state.article.map((e) => {
            return <div className="col-md-4" key={e.url}>
              <Newsitem title={e.title ? e.title.slice(0, 45) : ""} description={e.description ? e.description.slice(0, 88) : ""} imgUrl={e.urlToImage ? e.urlToImage : ""} newsUrl={e.url} />
            </div>
          })}

        </div>
        <div class="d-flex justify-content-between"><button type="button" class="btn btn-outline-dark">Previous</button>
          <button type="button" class="btn btn-outline-dark">Next</button></div>
      </div>
    )
  }
}
