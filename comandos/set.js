const db = require("megadb");
const megadb = require("megadb"); 
const nsfwchannel = new db.crearDB("canales_nsfw");
const instagram = new db.crearDB("links_instagram");
const registros = new db.crearDB("Canal_logs");
const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => { 
  
  
  if(!args[0]){
  
    const embeddefault = new Discord.MessageEmbed()
    .setTitle("Debes especificar que quieres configurar.")
    .setDescription("```Estos son algunos ejemplos:```")
    .addField("`logs` -set logs (canal)","establece el canal donde serán enviados los registros de auditoria del bot")
    .addField("`instagram` -set instagram (link)","linkea tu perfil de instagram a tu cuenta del bot")
    .addField("`tiktok` -set tiktok (link)","linkea tu perfil de tiktok a tu cuenta del bot")
    .addField("`nsfw` -set nsfw (canal)","establece el canal donde se permitira el uso de comandos NSFW del bot")
    .addField("`prefix` -set prefix (prefix)","establece el prefix del bot para tu servidor")
  
    message.channel.send(embeddefault)

}else if(args[0].toLowerCase() == "instagram"){
  

   let link = args.join('');
  
  let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
  
  
if(!args[1]){
    return message.reply("Debes proporcionar el link de tu instagram, se recomienda poner tu perfil en publico para esto.")
  
  
  }else{
  
  let embeddefinido = new Discord.MessageEmbed()
.setDescription(`Link definido [Prueba](link)`)
  
  
  
message.channel.send(embeddefinido).then(async m => { 
  await instagram.set(`${message.author.id}`,link);
  
 })
} 
  
  
}else if(args[0].toLowerCase() == "logs"){
  
  
  
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

  
  
  }else if(args[0].toLowerCase() == "nsfw"){
    
    
    const db = require("megadb");
const nsfwchannel = new db.crearDB("canales_nsfw");
const Discord = require('discord.js');
const megadb = require("megadb"); 

  
  let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
  
  
if(!channel){
    return message.reply("Debes proporcionar la ID o mencionar el canal donde iran los comandos NSFW")
  
  }else{
  
  let embed = new Discord.MessageEmbed()
.setTitle("Canal definido!")
  
  
  
message.channel.send(embed).then(async m => { 
  await nsfwchannel.set(`${message.guild.id}`,channel.id);
})
}
  
    
    
    }
  }