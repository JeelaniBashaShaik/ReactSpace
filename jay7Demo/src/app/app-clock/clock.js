import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
//import 'whatwg-fetch';
class AppClock extends React.Component{
    
    constructor(){
        super();
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        fetch('https://shoppingdemo-e8235.firebaseio.com/Customers_List/-KsoNkPNCT4m6WfCoD5L.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          console.log('parsed json', json)
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })

        /* api.openweathermap.org/data/2.5/forecast?id=1264527&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric */
       /*  fetch('api.openweathermap.org/data/2.5/forecast?id=1264527&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          console.log('parsed json', json)
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        }) */
    }

    tick(){
        this.setState({
          date: new Date()
        });
    }

    render(){
        return(
            <MuiThemeProvider>
            <div>
                  
    
 
                    <Card>
    <CardHeader
      title={<span style={timeStyle}>{this.state.date.toLocaleTimeString()}</span>}
      subtitle={<span style={dateStyle}>{this.state.date.toDateString()}</span>}
    />
    
    
  </Card>

            </div>
              </MuiThemeProvider>
        )           
    }
}

const timeStyle = {
    color:'grey',
    fontSize:'40px',
    fontWeight:'lighter'
  };
  const dateStyle = {
    fontSize: '15px',
    color:'grey',
    fontWeight:'lighter'
  };

ReactDOM.render(<AppClock />, document.getElementById('clock'));

export default AppClock;