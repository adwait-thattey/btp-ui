import React, {Component} from 'react';
import Aux from '../Aux/aux'; 
import Toolbar from '../../components/Nav/Toolbar/Toolbar';
// import Footer from '../../components/Footer/Footer';

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
                {/* <Footer /> */}
            </Aux>
        );
    }
};

export default layout;