const Discord = require('discord.js');
module.exports = (client, message, args) => {


 let estadouser = {


   "online":"Online", 
   "idle":"Ausente",
   "dnd":"No Molestar",
   "invisible":"Invisible/Desconectado",
 } 

let roles = message.guild.roles.cache.map(r => `${r}`).join(' ').slice(10) || "None"
var user = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

  
  const embed = new Discord.MessageEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor('Info de ' + user.username+'#'+user.discriminator, user.avatarURL)
    .setColor("RANDOM")  
    .addField('Nombre', user.username, true)
    .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
    .addField('ID', user.id, true)
    .addField('Estado', estadouser[user.presence.status], true)
    .addField("¿Es un BOT?", user.bot)
    .addField('Apodo', message.member.nickname, true)
    .addField('Cuenta Creada', user.createdAt.toDateString(), true)
    .addField('Fecha de Ingreso', message.member.joinedAt.toDateString(), true)
    .addField('Roles', message.member.roles.cache.map(roles => roles.name).join(', '), true)
    .setFooter("Solicitado por "+message.author.username+"", message.author.avatarURL)

  message.channel.send(embed);
}
  