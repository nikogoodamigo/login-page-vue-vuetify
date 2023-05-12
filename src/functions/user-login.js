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
            this.$store.state.token = token;
            setTimeout(() => {
              console.log(token);
              router.push('/adminpanel');
            }, 1000);
            
          }
        })
        .catch(error => {
          console.error(error);
        });
  }

