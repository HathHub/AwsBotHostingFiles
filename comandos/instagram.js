const Discord = require("discord.js");
const db = require("megadb");
const instagram = new db.crearDB("links_instagram");
const config = require('../config.js');

module.exports = async (bot, message, args) => {
 let user = message.mentions.users.first() || message.author; //si hubo mencion, user sera esa mencion, si no hubo mencion user sera el autor asi se evita errores
let data = await instagram.tiene(`${user.id}`)
  

  
if(!args[0]){  
  let URL = await instagram.get(`${user.id}`)
  
  return message.channel.send("tu url" + URL)
  
    if(!URL){
//si no esta el autor en la db
return message.channel.send("No has asignado tu perfil de instagram"); //retorna este mensaje
}
  
  }
  
    if(!URL){
//si no esta el autor en la db
return message.channel.send("No ha asignado su perfil de instagram"); //retorna este mensaje
}
  
let URL = await instagram.get(`${user.id}`)
message.channel.send("URL " + URL);
  
  
  }