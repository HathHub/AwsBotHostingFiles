const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = (bot, msg, args) => {

  
   if(msg.author.id !== '696481341566615664') return msg.reply("Solo Para El Developer Del Bot");
  
const embed = new Discord.MessageEmbed()
.setTitle("el comando `WHOIS @$member.username`") 
.addField(`Destroying all data.`,`/app/comandos/destroyWhois.js:19`) 
.setDescription("SEGURO QUE QUIERES BORRAR EL COMANDO `(YES/NO)`") 
msg.channel.send(embed)
  }