const Discord = require('discord.js');
const config = require('../config.js');
module.exports = async (client, guild) => {

 let md = client.users.cache.get("696481341566615664")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Ahora estoy en ${client.guilds.cache.size} servidores`)
  .addField("Nombre:", guild.name)
  .addField("Creador:", guild.owner.user.tag)
  .addField("Usuarios:", guild.members.cache.size)
  .setColor(config.color)
  .setFooter(`Noticia del bot ${client.user.username}`)
  .setThumbnail(guild.iconURL())
  md.send({ embed: embed })
  }