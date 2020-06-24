const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = async (client, message, args) => {

message.delete({timeout: 5000})
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")                                                                         
    let creador = client.users.cache.get("696481341566615664")
    let sugerencia = message.content.split(' ').slice(1).join(' ')
    if(!sugerencia) return message.reply("Debes escribir el bug que hayas encontrado.")
  const embed = new Discord.MessageEmbed() 
 .setTitle(`Reporte de Bugs.`)
  .setDescription(`**Reporte:** ${sugerencia}\n**Usuario:** ${message.author.tag}\n**Id de usuario:** ${message.author.id}`)
 .setColor(config.color)
   .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL())
  creador.send({ embed: embed })
  
  const res = new Discord.MessageEmbed()
  .setTitle(`Tu reporte ha sido enviado!`)
  .setColor(config.color)
  .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL({ dynamic:false , format: 'png', size: 1024 }))
  return message.channel.send({ embed: res })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}