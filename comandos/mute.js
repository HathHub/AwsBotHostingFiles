module.exports = (client, message, args) => {

if (!args)
return message.channel.send("Escribe un usuario al que mencionar."); 

const Discord = require('discord.js');  
//const command = args.shift().toLowerCase();
  
if(!message.guild.me.hasPermission("MANAGE_ROLES")) 
return message.channel.send("No tengo permisos.")


if(!message.member.hasPermission("MANAGE_ROLES"))
return message.channel.send("Perdón, pero no tienes permisos.")


let persona = message.mentions.members.first()
let rol = message.guild.roles.find(r => r.id == "471777855379079178");


if(!persona) return message.channel.send('Debe mencionar a alguien para mutear.')
if(!rol) return message.channel.send('Rol **muted** no encontrado en el servidor.')

persona.addRole(rol.id)
message.channel.send(`Listo, ${persona.user.username} ha sido muteado`)
}
