const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzA5MTMwMjY4MTY1OTMxMDU5.XrlIjQ.y5s8G0rO9Lu_nXczCIXNOI0A24k');