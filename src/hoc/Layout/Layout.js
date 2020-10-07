import React, {Component} from 'react';
import Aux from '../Aux/aux'; 

class layout extends Component {
    state ={
        
    }
    
    render(){
        return (
            <Aux>  
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default layout;