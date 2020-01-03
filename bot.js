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

client.login("NjYyNjc2NTcyNjAzNjc4Nzkx.Xg9neQ.dRxGS6V_9NVzmuyuLKUZ1ykI0x0");
