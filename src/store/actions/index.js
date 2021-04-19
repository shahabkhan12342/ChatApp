import Firebase from '../../config/firebase'
import firebase from 'firebase'



const facebook_login  =(history) =>{
   
        return (dispatch)=>{ 
            console.log('facebook login')
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    let create_user={
      name:user.displayName,
      email:user.email,
      profile:user.photoURL,
      uid:user.uid
      
    }

    // Adding Login Credintials in firebase
    firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
    .then(()=>{
      dispatch({type:'SETUSER', payload:create_user})
      alert('User Login Successful')
      history.push('/chat')
    }
    )


    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
            
            
        }
}


const get_users  =() =>{
   
  return (dispatch)=>{ 
        let users=[];
         firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
          }) 
          
          dispatch({type:'SETFIREBASEUSERS',payload:users})
         
  }}






export {
    facebook_login,
    get_users
}  