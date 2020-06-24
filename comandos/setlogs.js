const Discord = require('discord.js');
const megadb = require("megadb"); 
const registros = new megadb.crearDB("Canal_logs");
const config = require('../config.js');

module.exports = (client, message, args) => { 
  
  
 let creador = client.users.cache.get("696481341566615664") 
let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
if(!channel){
    return message.reply("Debes proporcionar la ID o mencionar el canal donde iran los registros")
  
}else{
  
    const embedmd = new Discord.MessageEmbed() 
 .setTitle("Nueva Configuracion")
.addField("Canal de los registros", channel, true)
.addField("Servidor", message.guild.name, true)
.addField("ID Servidor", message.guild.id, true)
.setColor(config.color)
.setTimestamp()
.setThumbnail(message.guild.iconURL({ dynamic:false , format: 'png', size: 1024 }))
.setFooter(message.author.tag, message.author.avatarURL())
  creador.send({ embed: embedmd })    
  
let embed = new Discord.MessageEmbed()
.setTitle("Nueva Configuracion")
.addField("Canal de los registros", channel, true)
.addField("Servidor", message.guild.name, true)
.addField("ID Servidor", message.guild.id, true)
.setColor(config.color)
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL())
message.channel.send(embed).then(async m => {
await registros.set(`${message.guild.id}`,channel.id);
m.delete({timeout: 50000})
})
} 
  }
  
  