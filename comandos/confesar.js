try {
const { RichEmbed } = require('discord.js')
module.exports = async (client, message, args) => {

  
if(!args) return message.channel.send("Usa -confesion (a) <confesion> | `a` para hacerlo anónimo");//cambia el mensaje
if(args[0] == "a" && args[1] == false) return message.channel.send("Usa -confesion a <confesion>");
//Lo de arriba es por si pone a al comienzo, pero no pone la confesion retorne el mensaje ej: -confesion a
var channel = client.channels.get("690407581797187634");

if(args[0] == "a") {
let confesion = args.slice(1).join(" ");
const embed = new RichEmbed()
.setTitle("Nueva confesión:")
.setDescription(confesion)
.setFooter(`Por: Anónimo`)
.setColor ("00e059") 
.setTimestamp(new Date())
return channel.send(embed)
}

let confesion = args.join(" ");
const embed = new RichEmbed()
.setTitle("Nueva confesión:")
.setDescription(confesion)
.setFooter(`Por: ${message.author.tag}`, message.author.displayAvatarURL)
.setColor ("00e059") 
.setTimestamp(new Date())
return channel.send(embed);
} 


} catch (err) {
console.trace(err)
}