import { post } from 'axios';
import * as config from '../config';

const sendDM = async (userId) => {
try {
    const response = await post(
        'https://slack.com/api/conversations.open',
        {
            users: userId
        },
        {
            headers: {
                //'Authorization': `Bearer ${config.greetBotToken}`,
                Authorization: `Bearer ${config.botToken}`
            }
        }
        
    )
    console.log(response);
} catch (error) {
    throw error;
}

}