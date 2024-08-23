module.exports.config = {
    name: 'admin',
    version: '1.0.0',
    role: 0,
    description: "Admin",
    usage: "admin",
    credits: 'Developer',
    cooldown: 3,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const input = args.join(" ");

    if (!input) {
        api.sendMessage("https://www.facebook.com/manarintso.niaina.", event.threadID, event.messageID);
        return;
    }
    try {  
        const content = encodeURIComponent(input);
        const response = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=ph&message=${content}&filter=false`);
        const responseData = response.data;
        if (responseData.error) {
            api.sendMessage("https://www.facebook.com/manarintso.niaina.", event.threadID, event.messageID);
        } else {
            api.sendMessage(responseData.success, event.threadID, event.messageID);
        }
    } catch (error) {
        api.sendMessage("https://www.facebook.com/manarintso.niaina.", event.threadID, event.messageID);
    }
};
