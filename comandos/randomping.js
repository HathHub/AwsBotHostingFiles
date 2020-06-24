const Discord = require('discord.js');
module.exports = (client, message, args) => {

let ping = message.guild.members.random()

message.channel.send(ping)
} 