const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("620254222344126494")
setInterval(function() {
channel.send(`#rep @!XL xiWeezy🕊#0709 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);