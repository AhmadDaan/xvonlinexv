const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();

client.on('message', msg => {
  if (msg.content === '#test') {
    msg.channel.send('Test Successful');
    msg.channel.sendFile('https://media.giphy.com/media/8GY3UiUjwKwhO/giphy.gif')
  }
});


client.login(process.env.BOT_TOKEN); 
client2.login(process.env.BOT_TOKEN2); 
client3.login(process.env.BOT_TOKEN3); 
client4.login(process.env.BOT_TOKEN4); 
client5.login(process.env.BOT_TOKEN5);
client6.login(process.env.BOT_TOKEN6);
client7.login(process.env.BOT_TOKEN7);
client8.login(process.env.BOT_TOKEN8);
client9.login(process.env.BOT_TOKEN9);
client10.login(process.env.BOT_TOKEN10);
client11.login(process.env.BOT_TOKEN11);
client12.login(process.env.BOT_TOKEN12);
client13.login(process.env.BOT_TOKEN13);
client14.login(process.env.BOT_TOKEN14);
client15.login(process.env.BOT_TOKEN15);
client16.login(process.env.BOT_TOKEN16);
client17.login(process.env.BOT_TOKEN17);
client18.login(process.env.BOT_TOKEN18);
client19.login(process.env.BOT_TOKEN19);
client20.login(process.env.BOT_TOKEN20);