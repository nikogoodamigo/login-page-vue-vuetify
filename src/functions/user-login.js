import axios from 'axios';
import {router} from '../router';


var token ={
  tokenCode: Number,
  expiresAt: Date
};

export function loginAction(username, password){

      axios.post('http://localhost:3001/api/createToken', {
        username,
        password
      })
        .then(response => {
          if(response.data.responseCode == 401){
            window.alert(response.data.responseMessage);
          }
          else{
            this.tokenCode = response.data.token;
            this.expiresAt = response.data.expires_at;
            token.expiresAt = this.expiresAt;
            token.tokenCode = this.token;
            this.$store.state.token = token.tokenCode;
            setTimeout(() => {
              console.log('token is active until: ' + token.expiresAt);
              router.push('/adminpanel');
            }, 1000);
            
          }
        })
        .catch(error => {
          console.error(error);
        });
  }

export function isTokenActiv(){
  const currentTime = new Date();

  if(currentTime > token.expiresAt){
    router.push('/');
  }
}

