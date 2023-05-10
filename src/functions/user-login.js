import axios from 'axios';
import {router} from '../router';

var token;

export function loginAction(username, password){
    if (username == 'niko' && password == '123'){
      axios.post('http://localhost:3001/api/createToken')
        .then(response => {
          this.token = response.data.token;
          token = this.token;
          router.push('/adminpanel');
        })
        .catch(error => {
          console.error(error);
        });
    }
    else {
      window.alert('Wrong credentials');
    }
  }

export function returnToken(){
  console.log(token);
  return token;
}

