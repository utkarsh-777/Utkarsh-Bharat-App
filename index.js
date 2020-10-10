/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from "axios"

axios.defaults.baseURL = "https://utkarshbackend.herokuapp.com";
//axios.defaults.baseURL = "http://127.0.0.1:8000";

AppRegistry.registerComponent(appName, () => App);
