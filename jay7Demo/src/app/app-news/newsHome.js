import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs,Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
//import {NewsComponent } from './news.js';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';    

const styles = {
    root: {
      /* display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around', */
    },
    gridList: {
      width: '50%',
      height: '90%',
      overflowY: 'auto',
    },
    cardsHolder:{
      /*   display: 'flex',
        flexDirection:'row' */

    }
  };
  const cardStyle={
    padding:'1%',
    width:'400px',
    marginTop:'10px',
/*     display:'flex',
    flexDirection:'row' */
}   
const titleStyle={
    fontSize:'25px'
}

const card1={
    backgroundColor:'lightgrey'
}

class NewsHome extends React.Component{
    constructor(){
        super();
        this.state={
            news:[]
        }
        this.fetchHinduNews = this.fetchHinduNews.bind(this);
    }

    componentWillMount(){
        this.fetchHinduNews();

    }

    fetchHinduNews(){
        console.log('inside here');
    }
    render(){
        return(
            <MuiThemeProvider>
                <div>
                <Tabs>
                    <Tab label="The Hindu" >
                        we are in tab1
                        <div id="list2">
                       {/*  <Header/> */}
                        <NewsComponent url={'https://newsapi.org/v1/articles?sortBy=latest&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e&source=the-hindu'}/>
                       </div>
                    </Tab>
                    <Tab label="Times of India">
                    <NewsComponent url={'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c'}/>
                    </Tab>
                    <Tab label="The Verge">
                    <NewsComponent url={'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c'}/>
                    </Tab>
                    <Tab label="National Geographic">
                    <NewsComponent url={'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c'}/>
                    </Tab>
                    <Tab label="New Scientist">
                    <NewsComponent url={'https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c'}/>
                    </Tab>
                    <Tab label="Google News ">
                    <NewsComponent url={'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c'}/>
                    </Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        )
    }
}

class Header extends React.Component {
    render() {
       return (
          <div>
             <h1>Header</h1>
          </div>
       );
    }
 }

 class NewsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url:this.props.url,
            list1:['jeelani','basha','shaik'],
            name:'Vempalli sai krishna',
            hinduNews:[],
            abc:null
        }
    }
    componentDidMount(){
        console.log(this.state.url);
        fetch(this.state.url)
        .then(response=> {
          return response.json()
        }).then((data) => {
            this.abc = data.articles;
            this.hinduNews = this.abc;
            console.log(this.abc);
            this.setState({hinduNews:this.abc});
            console.log(this.hinduNews);
        });
    }
    render(){
       /*  var x = this.state.list1;
        x = x.map(function(item){
            return(
                <li key={item}>{item}</li>
            )
        }) */
        console.log(this.hinduNews);
        var y = this.state.hinduNews;
        y = y.map((news)=>{
            return(
                <div key={news.title} style={styles.cardsHolder}>
                <Card style={cardStyle}>
        
        <CardMedia>
          <img src={news.urlToImage}  alt="" />
        </CardMedia>
        <CardTitle style={card1} title={<span style={titleStyle}>{news.title}</span>}/>
        <CardText>
        {news.description}
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          
        </CardActions>
      </Card></div>
            )
        })
    
        
        return (
            <MuiThemeProvider>
                <div>
                <div style={cardStyle}>{y}</div></div>
            </MuiThemeProvider>
        )
    }
    }

ReactDOM.render(<NewsHome />,document.getElementById('newsHome'));


export default NewsHome;