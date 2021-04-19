import React from 'react';
import {connect} from 'react-redux';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';


import {facebook_login} from '../../store/actions';
import Header from '../Header';
import './style.css';

class Home extends React.Component{
    render(){
        <div>
            
        </div>
       let user= {name:'Umair', emaail:'u123@gmail.com'}
       console.log('users',this.props.users)
        return(
            
            <div>
               
                <h1 style={{textAlign:'center',fontFamily:"sans-serif",fontStyle:"oblique",marginTop:'30px',fontSize:'40px',color:'blue'}}>WELCOME TO CHAT APP</h1>
                <h2 style={{textAlign:'center',fontFamily:"sans-serif"}}>Press Login Button to Login to your Account</h2>
                <button style={{marginLeft:"570px",backgroundColor:"blue",color:"White",fontSize:'25px'}} onClick={()=> this.props.facebook_login(this.props.history)}>Facebook Login</button>
                

            </div>
        )
    }
}
const mapStateToProps = (state) =>
({
    users:state.users
})

///  ----------mapDispatch mai hum state ko update krty hain
const mapDispatchToProps =(dispatch) => ({ 
   
    facebook_login:(history)=> dispatch(facebook_login(history)) 
 })


export default connect(mapStateToProps,mapDispatchToProps)  (Home);