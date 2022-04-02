export interface IConfig{
    mongoURL:string;
    nodeEnv:string;
}
/**
 * For loading .ENV
 * 1.install 'dotenv'
 * 2. import and call config() 
 */
import * as dotenv from 'dotenv';
dotenv.config();

const config = ():IConfig=>{

    const nodeEnv = process.env.NODE_ENV
    let mongoURL = process.env.MONGO_URL
    if(nodeEnv==='test'){
        mongoURL=process.env.MONGO_URL_TEST
    }
    return{
        mongoURL,
        nodeEnv
    }
}
export default config()