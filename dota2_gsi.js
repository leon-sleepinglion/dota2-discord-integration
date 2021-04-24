require('dotenv').config()

const d2gsi = require('dota2-gsi');
const axios = require('axios').default;

const server = new d2gsi({
    port: process.env.GSI_PORT,
    token: process.env.GSI_TOKEN,
});
const webhook_url = process.env.DISCORD_WEBHOOK_URL;

let team;

server.events.on('newclient', async (client) => {

    console.log("New client connection, IP address: " + client.ip);

    client.on('player:activity', async (activity) => {
        if (activity == 'playing') {
            team = client.gamestate.player.team_name;
            console.log("#start The game has started.");
            axios.post(webhook_url, {
                content: '#start The game has started.',
            });
        }
    });

    // bounty reminder
    client.on('map:clock_time', async (time) => {
        if (time > 0 && (time + 20) % 180 === 0) {
            console.log("#bounty Bounty runes will spwan in 20 seconds.");
            axios.post(webhook_url, {
                content: '#bounty Bounty runes will spwan in 20 seconds.',
            });
        }
    });

    // level 6 notifier
    client.on('hero:level', function(level) {
        if (level === 6) {
            console.log("#level6 Leon is now Level 6.");
            axios.post(webhook_url, {
                content: '#level6 Leon is now Level 6.',
            });
        }
    });

    // win/lose notifier
    client.on('map:win_team', function(win_team) {
        if (win_team === team) {
            console.log("#win We won!");
            axios.post(webhook_url, {
                content: '#win We won!',
            });
        }
        else {
            console.log("#lose Oh no, we lost. We will do better next time!");
            axios.post(webhook_url, {
                content: '#lose Oh no, we lost. We will do better next time!',
            });
        }
    });

    // TODO: SS cooldown notifier
    
    // TODO: Roshan reminder
});