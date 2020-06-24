const {MessageEmbed} = require("discord.js"),
 megadb = require("megadb"),
registros = new megadb.crearDB("Canal_logs");

module.exports = async (client, message) => {
  if(!registros.has(`${message.guild.id}.logs`)) return;//si en la db opciones no hay un canal logs en el clave-split .logs
  let logchannel = await registros.get(`${message.guild.id}.logs`);// obtiene la id del canal logs
  let canal = client.channels.cache.get(logchannel);//obtiene el canal por la id que esta almacenada en el  clave-split .logs
  if(!canal) return; //si la id del canal no existe retornara a nada
  if(message.content) {//si el mensaje tiene contenido hara lo siguiente
    let logEmbed = new MessageEmbed()
    .setTitle("**ã:wastebasket:ã** Mensaje Borrado")
    .setDescription("â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬â¬")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
    .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
    .setFooter(`ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
    .setTimestamp()
    .setColor("RED")
    .addField("En", message.channel, true)
    .addField("Mensaje", message.content, true);
    canal.send(logEmbed);
}
if(message.attachments.size > 0){//si hay mas de 0 imagenes hara lo siguiente
  let Attachs = (message.attachments).array()//obtiene un array de todas las imagenes
  Attachs.forEach(m => {//consigue todas las imagenes y luego las exporta en la variable m
    const embed = new MessageEmbed()
    .setTitle("**ã:wastebasket:ã** Imagen Borrada")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
    .setThumbnail(message.author.avatarURL)
    .setFooter(`ID: ${message.author.id}`, message.author.displayAvatarURL({dynamic:true}))
    .setColor("RED")
    .addField("En", message.channel, true)
    .setImage(m.proxyURL)//consigue la url de la imagen
    canal.send(embed)
  }) 
}
} 