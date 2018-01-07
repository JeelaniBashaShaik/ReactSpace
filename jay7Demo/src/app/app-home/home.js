import React from 'react';
import ReactDOM from 'react-dom';

class AppHome extends React.Component{

render(){
    return(
        <div>Hello, Welcome</div>
    )
}
}

ReactDOM.render(<AppHome />, document.getElementById('root'));


export default AppHome
