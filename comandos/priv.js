const Discord = require('discord.js');

module.exports = (client, message, args) => { 

let mensaje = args.join(" ");
  
//let user = message.mentions.users.first();
//if (!user) user = message.author;
if(!mensaje) return message.channel.send(`Escriba un mensaje para enviartelo por privados.`);
message.author.send(mensaje);//message.users.send(mensaje)
}