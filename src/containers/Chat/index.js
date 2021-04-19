
import React from 'react';
import {connect} from 'react-redux';
import {get_users} from '../../store/actions'


class Chat extends React.Component{
    constructor(){
        super()
        this.state={
            chat_user:{},
            chats:[],
            message:''
        }
    }
    chat=(user)=>{
        this.setState({
            chat_user:user
        })

    }
    send_message=()=>{
        let user= this.props.current_user;
        let chat_user=this.state.chat_user;
        this.state.chats.push({
            message:this.state.message
        })
        this.setState({
            chats:this.state.chats,
            message:''
        })
    }


    componentDidMount(){
        this.props.get_users()
    }
    render(){
       
         let user=this.props.current_user;
         console.log('firebase usersss',this.props.users)
        return(
            <div>
                 <h1 style={{textAlign:'center',fontFamily:"sans-serif",fontStyle:"oblique",marginTop:'30px',fontSize:'40px',color:'blue'}}>WELCOME TO CHAT APP</h1>
                 <img src={user.profile} alt='' /> 
                <h1>User Name :{user.name}</h1>
                <h2> Email Address :{user.email}</h2>
                
                <div style={{display:'flex',padding:'10px'}}>
                    <div style={{backgroundColor:'grey'}}>
                        <h1 style={{color:'blue',marginLeft:'10px'}}>Chat Users:</h1>
                        <ul>
                            {this.props.users.map((v,i)=>{
                                return  v.uid !== user.uid && <li key={i}>
                                    <img src={v.profile} alt='' width='20' />
                                    {v.name} 
                                    <button onClick={()=>this.chat(v)}>Chat</button></li>
                            })}
                        </ul>
                    </div>
                    <div style={{width:400,backgroundColor:"yellow", marginLeft:"50px", padding:'20px'}}>
                        <h4 style={{color:'blue',fontSize:'30px'}}>Chat</h4>
                        {Object.keys(this.state.chat_user).length ?
                        <div>
                            <h4><img src={this.state.chat_user.profile}  alt='' width='20'/> {this.state.chat_user.name}</h4>
                            <ul>
                            {this.state.chats.map((v,i)=>{
                                return <li key={i}>{v.message}</li>
                            })}
                        </ul>
                            
                            
                            <input value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})} type="text" placeholder='Enter your message'/>
                        <button style={{marginLeft:'20px'}} onClick={()=>this.send_message()}>Send Message</button>
                        </div>
                        :
                        <h4>No user</h4>
                            
    }

                    </div>
                </div>
                
               
                

            </div>
        )
    }
}
const mapStateToProps = (state) =>
({
    current_user:state.current_user,
    users:state.users
})
 const mapDispatchToProps =(dispatch) => ({ 
   
     get_users:()=> dispatch(get_users()) 
  })


export default connect(mapStateToProps,mapDispatchToProps)  (Chat);