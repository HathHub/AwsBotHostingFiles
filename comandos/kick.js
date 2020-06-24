const Discord = require('discord.js');

module.exports = (client, message, args) => {
  
let mencionado = message.mentions.users.first();

message.guild.member(mencionado).kick;

message.delete({timeout: 5000})
    }
  
