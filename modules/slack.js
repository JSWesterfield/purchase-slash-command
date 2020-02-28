const axios = require('axios')
const config = require('../config')
//import { post } from 'axios';
//import * as config from '../config';
//import { monitorEventLoopDelay } from 'perf_hooks';

const sendDM = async (userId, message) => {
try {
    const response = await axios.post(
        'https://slack.com/api/conversations.open',
        {
            users: userId
        },
        {
            headers: {
                Authorization: `Bearer ${config.botToken}`,
           }
        }
    );
    console.log('Heres our response: ');
    console.log(response);
} catch (error) {
    throw error;
}

};
pwd

module.exports = {
    sendDM
};
