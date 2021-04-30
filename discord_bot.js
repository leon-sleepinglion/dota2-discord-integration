require('dotenv').config()

const path = require('path');
const Discord = require('discord.js');
const client = new Discord.Client();

if (process.env.DISCORD_BOT_LOG_LEVEL === 'debug') {
    const logger = require("discordjs-logger");
    logger.all(client);
}

client.login(process.env.DISCORD_BOT_TOKEN);

let connection;
let dispatcher;

function playSoundFromFile(file) {
    return connection.play(path.resolve(__dirname, 'soundpack', file));
}

client.on('message', async message => {
    // Initialization
    const channel = message.guild.channels.cache.get(process.env.DISCORD_CHANNEL);
    connection = await channel.join();

    if (message.content.includes('#start')) {
        dispatcher = playSoundFromFile('start.mp3');
        return;
    }

    if (message.content.includes('#bountypower')) {
        dispatcher = playSoundFromFile('bountypower.mp3');
        return;
    }

    if (message.content.includes('#bounty')) {
        dispatcher = playSoundFromFile('bounty.mp3');
        return;
    }

    if (message.content.includes('#power')) {
        dispatcher = playSoundFromFile('power.mp3');
        return;
    }

    if (message.content.includes('#level6')) {
        dispatcher = playSoundFromFile('level6.mp3');
        return;
    }

    if (message.content.includes('#roshan')) {
        dispatcher = playSoundFromFile('roshan.mp3');
        return;
    }

    if (message.content.includes('#win')) {
        dispatcher = playSoundFromFile('win.mp3');
        return;
    }

    if (message.content.includes('#lose')) {
        dispatcher = playSoundFromFile('lose.mp3');
        return;
    }
});