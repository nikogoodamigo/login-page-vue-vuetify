import axios from 'axios';
import {router} from '../router';

var token;

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
            this.token = response.data.token;
            token = this.token;
            router.push('/adminpanel');
          }
        })
        .catch(error => {
          console.error(error);
        });
  }

export function returnToken(){
  console.log(token);
  return token;
}

