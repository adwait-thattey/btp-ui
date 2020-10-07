import React, {Component} from 'react';
import Aux from '../Aux/aux'; 
import Toolbar from '../../components/Nav/Toolbar/Toolbar';

class layout extends Component {
    state ={
        
    }
    
    render(){
        return (
            <Aux>  
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

export default layout;