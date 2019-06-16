import { Link } from "react-router-dom";
import history from "../history";

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://reqres.in/',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });


export function postLoginInfo(data:any){
 
    instance({
        method: 'post',
        url: '/api/login',
        data:data
      }).then(function (response:any) {
        history.push('/welcome')
    })
    .catch(function (response:any) {
        //handle error
        history.push('/login')

        console.log(response);
    });;
}

export function postRegisterInfo(data:any){
 
    instance({
        method: 'post',
        url: '/api/register',
        data:data
      }).then(function (response:any) {
        //handle success
        console.log(response);
        history.push('/welcome')

    })
    .catch(function (response:any) {
        //handle error
        console.log(response);
        history.push('/login')

    });;;
}