require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.DISCORD_BOT_TOKEN);

let connection;

client.on('message', async message => {
    // Initialization
    const channel = message.guild.channels.cache.get(process.env.DISCORD_CHANNEL);
    connection = await channel.join();

    if (message.content.includes('#start')) {
        const dispatcher = connection.play('soundpack/start.mp3');
        return;
    }

    if (message.content.includes('#bounty')) {
        const dispatcher = connection.play('soundpack/bounty.mp3');
        return;
    }

    if (message.content.includes('#level6')) {
        const dispatcher = connection.play('soundpack/level6.mp3');
        return;
    }

    if (message.content.includes('#roshan')) {
        const dispatcher = connection.play('soundpack/roshan.mp3');
        return;
    }

    if (message.content.includes('#win')) {
        const dispatcher = connection.play('soundpack/win.mp3');
        return;
    }

    if (message.content.includes('#lose')) {
        const dispatcher = connection.play('soundpack/lose.mp3');
        return;
    }
});