import {config} from './modules/config'
import AppService from './modules/app.service.js'
import './modules/header.component.js'
import './css/index.css'
import './scss/index.scss'

console.log(config.key);
const service = new AppService('grant')
service.log()
 