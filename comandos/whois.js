const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {

  var member = msg.mentions.users.first() || msg.guild.members.cache.get(args.join(" "));
  
   if(msg.author.id !== '696481341566615664') return msg.reply("Solo Para El Developer Del Bot");
  
const embed = new Discord.MessageEmbed()
.setTitle(`Ip de ; gogera#3916`)
.setDescription(`Network connection limited | not further than spain
(404 error) see logs for more information.
`) 
msg.channel.send(embed)
  

}