const Discord = require("discord.js");
const config = require('../config.js'); 
module.exports = (client, message, args) => {
  let guild = message.guild;
  
  const embed = new Discord.MessageEmbed()

  .setTitle("Información del Bot")
  .setDescription("AzukiChan es un bot multiproposito con el objetivo de enfocar todas las otras funciones de los bots en uno mismo, facilitando el uso de diferentes comandos e interacciones mediante la aceptacion de comandos y sugerencias provenientes de la comunidad")
  .addField("`Developer`", "Hath.#6051")
  .setThumbnail(client.user.displayAvatarURL())
 .addField("`Permisos`", "`KICK_MEMBERS`, `BAN_MEMBERS`, `ADMINISTRATOR`, `MANAGE_CHANNELS`, `MANAGE_GUILD`, `MANAGE_MESSAGES`, `MANAGE_ROLES`, `MANAGE_WEBHOOKS` y `MANAGE_EMOJIS`.")
  .addField("`Cantidad de Servidores`", `${client.guilds.cache.size}`)
  .addField("`Cantidad global de usuarios`", `${client.users.cache.size}`)
  .addField("`Idioma`","Español")
  .addField("`Tags`", "Diversíon, Memes, Anime, Moderación, Configuración, útil y Música")
  .addField("Pagina de top.gg/Invite", `[Click Aquí](https://top.gg/)`)
  .addField("Servidor de soporte", `[Click Aquí](https://discord.gg/aC5JfQF)`)
  .setFooter(`${message.author.tag}`, message.author.avatarURL())
  .setColor(config.color)
  
   message.channel.send({ embed: embed })
  
}