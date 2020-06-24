//Antes que nada, debes instalar el NPM de mega-dtbs.
//Si aun no lo has hecho, instala el NPM de discord.
const Discord = require("discord.js");
const db = require("megadb");
//Indicamos que es DB y que es Discord 
let prefix_db = new db.crearDB("prefijos");
//Puedes cambiar este nombre si gustas, yo lo pondre prefix_db.
module.exports = (client, message, args) => { 
  
//Hacemos un embed
let embed = new Discord.MessageEmbed()
        .setTitle("No tienes acceso a este comando!")
        .setColor("RANDOM");



  let error = args.join(" ");
  if (!error) 

  if (!message.member.permission.has("ADMINISTRATOR"))
return message.channel.send(embed);
//Enviamos el embed
  
//Indicamos que hacer si no hay argumentos
    if (!args[0])
      
      return message.channel.send(
       new Discord.MessageEmbed()
        .setDescription("You need to put the new prefix")
        .setColor("RANDOM")
    );
//Cambiamos el prefix
    prefix_db.agregar(`${message.guild.id}`, args[0]);
  
//Indicamos que el prefix se ha cambiado
    return message.channel.send(
 new Discord.MessageEmbed()
      .setDescription("The prefix has just been changed to " + args[0])
      .setColor("RANDOM")
      );
}
//Puedes apoyarme viendo mis otros codigos. Gracias!