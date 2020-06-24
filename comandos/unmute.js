module.exports = (client, message, args) => {

if (!args)
return message.channel.send("Escribe un usuario al que mencionar."); 

const Discord = require('discord.js');  
//const command = args.shift().toLowerCase();
  
if(!message.guild.me.hasPermission("MANAGE_ROLES")) 
return message.channel.send("No tienes permisos.")


if(!message.member.hasPermission("MANAGE_ROLES"))
return message.channel.send("Perdón, pero no tienes permisos.")


let persona = message.mentions.members.first()
let rol = message.guild.roles.find(r => r.name == "Muted");


if(!persona) return message.channel.send('Debe mencionar a alguien para desmutear.')
if(!rol) return message.channel.send('Rol **muted** no encontrado en el servidor.')

persona.removeRole(rol.id)
message.channel.send(`Listo, ${persona.user.username} ha sido desmuteado`)

/*let nombrerol = args.slice(1).join(' ')
if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar.')
*/
}
