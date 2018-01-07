import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {GridList, GridTile} from 'material-ui/GridList';    

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '100%',
      height: '90%',
      overflowY: 'auto',
    },
  };
  

class NewsComponent extends React.Component{
constructor(){
    super();
    this.state = {
       // url:this.props.url,
        list1:['jeelani','basha','shaik'],
        name:'Vempalli sai krishna',
        hinduNews:[],
        abc:null
    }
}
componentDidMount(){
    console.log(this.state.url);
    fetch('https://newsapi.org/v1/articles?sortBy=latest&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e&source=the-hindu')
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
    var x = this.state.list1;
    x = x.map(function(item){
        return(
            <li key={item}>{item}</li>
        )
    })
    console.log(this.hinduNews);
    var y = this.state.hinduNews;
    y = y.map((news)=>{
        return(
            <div key={news.title}>
            <Card>
    
    <CardMedia    >
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
    <div>React !!!!!
            <div style={cardStyle}>{y}</div>
            <ul>{x}</ul>
            <h4>{this.state.name}</h4>
        </div>
        </MuiThemeProvider>
    )
}
}

const cardStyle={
    padding:'1%'
}   
const titleStyle={
    fontSize:'25px'
}

const card1={
    backgroundColor:'lightgrey'
}

//ReactDOM.render(<NewsComponent />, document.getElementById('list2'));

//export default NewsComponent;