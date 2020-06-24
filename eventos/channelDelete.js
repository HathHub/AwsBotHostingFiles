const megadb = require("megadb"),
 { MessageEmbed } = require("discord.js"),
registros = new megadb.crearDB("Canal_logs");

module.exports = async (client, channel) => {
  if (channel.type === "dm") return;//si el tipo de canal es privado retornara a nada
  if(!registros.has(`${channel.guild.id}.logs`)) return;//si en la db opciones no hay un canal logs en el clave-split .logs
  let logchannel = await registros.get(`${channel.guild.id}.logs`); // obtiene la id del canal logs
  let logEmbed = new MessageEmbed()
  .setTitle("**「:x:」• Canal Removido**")
    .setDescription("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    .setColor("GREEN")
    .addField("Tipo", "`" + channel.type + "`", true)
    .addField("Nombre", "`" + channel.name + "`", true)
    .addField("Creado", "`" + channel.createdAt.toDateString() + "`", true)
    .addField("ID", "`" + channel.id + "`", true)
    .setTimestamp()
    .setFooter(`•${channel.guild.name}•`, client.user.displayAvatarURL({dynamic:true}), true);
  
  let canal = client.channels.cache.get(logchannel);//obtiene el canal por la id que esta almacenada en el  clave-split .logs
  if(!canal) return; //si la id del canal no existe retornara a nada
  canal.send(logEmbed); //enviara el embed con el
};
