import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

injectTapEventPlugin();

class App12 extends React.Component{
constructor(){
    super();
    this.state = {
        y:[]
    }
}

    

  
render(){
    return(
        <MuiThemeProvider>
          
        <div className="main">
              {/* { isGrayNav ? <GrayNavBar/> : <MainNavBar/> } */}
              <RaisedButton label="Primary" primary={true}/>

              <Tabs>
    <Tab label="Item One" >
     
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2> }>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab></Tabs>
         </div>
        </MuiThemeProvider>
    )
}
}

const cardStyle={
    width:'25%',
    padding:'1%'
}   
const titleStyle={
    fontSize:'25px'
}

const card1={
    backgroundColor:'lightgrey'
}
ReactDOM.render(<App12 />, document.getElementById('app1'))

  export default App12;