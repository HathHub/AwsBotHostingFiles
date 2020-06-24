

module.exports = async (client, message, args) => { 
  
 const Discord = require('discord.js'); 
if (!args.join(' ')) return message.reply(`Escriba el mensaje a enviar.`);

client.channels.get('IDCHANNEL').send(args.join(" "));
}