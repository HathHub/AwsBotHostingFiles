
 const Discord = require('discord.js'); 
module.exports = (client, message, args) => { 
  
if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
    return message.channel.send("No tengo permisos")
}
  
if(!message.member.hasPermission("BAN_MEMBERS")){
    return message.channel.send("Perdon, pero no tienes permisos")
}

let persona = message.mentions.members.first()
if(!persona) {
    return message.channel.send('Debe mencionar a alguien para banear')
}else if(persona.highestRole.comparePositionTo(message.member.highestRole) > 0){
    return message.channel.send("Esta persona esta en la misma o mayor nivel de jerarquia que tu, no puedes banearlo")
}

var razon = args.slice(1).join(' ') 
if(!razon) {
  razon = `Razon no especificada` 
}
  
razon = razon+`, Baneado por ${message.author.tag}`
    
persona.ban(razon).catch(e => message.reply("Ocurrio un **error** desconocido"))
message.channel.send(`Listo, banee a **${persona.user.tag}**`)
}