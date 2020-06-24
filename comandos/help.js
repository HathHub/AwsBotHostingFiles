const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => { 

  
  const embednsfw = new Discord.MessageEmbed()
  
 .setColor(config.color)
.addField("Comandos de Moderación","`Ban`, `Kick`, `Mute`,`Tempban`,`Tempmute`, `Unmute`, `Unban`,")
.addField("Comandos de Administracion:","`Createrole`, `Removerole`, `Addrole`,`clear`,`Approve`,`Deny`")
.addField("Comandos útiles:","`afk`,`Userinfo`, `Server`, `Say`, `Saychannel`, `Calculate`,`Sugerencia`,`Confesar`"
      )
  .addField("Comandos de Reacción","`Cry`")
.addField(
        "Comandos de Interacción:",
          "`Tickle`, `Poke`, `Kiss`, `Hug`, `Cuddle`,`Pat`,`Slap`,`Feed`,`Baka`,`Lick`,`Kill`,`Revive`,`Run`,`Cookie`"
      )
.addField("Comandos de NSFW:",
          "`Fuck`, `Anal`, `Masturbate`, `Gmasturbate`, `Eatpussy`,`Spank`,`Boobs`,`Blowjob`,`feet`"
        )
.setTitle("Comandos del BOT")
.setFooter(`${message.author.tag}`, message.author.avatarURL())
  if(message.channel.nsfw) return message.channel.send({ embed: embednsfw }) 
 //envias el embed pero con el field agregado aca
  
  
  
  
 const embed = new Discord.MessageEmbed()
.setColor(config.color)
.setFooter(`${message.author.tag}`, message.author.avatarURL())
.setTimestamp()
 
 
if(!args[0]){
    
embed.setColor(config.color)
embed.addField("Comandos de Moderación","`Ban`, `Kick`, `Mute`,`Tempban`,`Tempmute`, `Unmute`, `Unban`,")
embed.addField("Comandos de Administracion:","`Createrole`, `Removerole`, `Addrole`,`clear`,`Approve`,`Deny`")
embed.addField("Comandos útiles:","`afk`,`Userinfo`, `Server`, `Say`, `Saychannel`, `Calculate`,`Sugerencia`,`Confesar`"
      )
  embed.addField("Comandos de Reacción","`Cry`")
embed.addField(
        "Comandos de interacción:",
          "`Tickle`, `Poke`, `Kiss`, `Hug`, `Cuddle`,`Pat`,`Slap`,`Feed`,`Baka`,`Lick`,`Kill`,`Revive`,`Run`,`Cookie`"
      )
embed.addField(
        "Comandos de NSFW:",
          "**Para ver esta clase de comandos y ejecutarlos necesitas estar en un canal NSFW**"
        )
embed.setTitle("Comandos del BOT")
embed.setFooter(`${message.author.tag}`, message.author.avatarURL())

      embed.setFooter(`${message.author.tag}`, message.author.avatarURL())
      message.channel.send(embed) //envias el embed pero con el field agregado aca

}else if(args[0].toLowerCase() == "ban"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -ban (@usuario) (razón)", "Este comando te permite eliminar permanente a un usuario de " + server.name); 
  embed.setTitle("Ban | Moderación")
  message.channel.send(embed);
}else if(args[0].toLowerCase() == "kick"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -kick (@usuario) (razón)", "Este comando te permite eliminar temporalmente a un usuario de " + server.name); 
  embed.setTitle("Kick | Moderación")
  message.channel.send(embed); 
  
  }else if(args[0].toLowerCase() == "mute"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -ban (@usuario) (razón)", "Este comando te permite silenciar permanentemente a un usuario de " + server.name); 
  embed.setTitle("Mute | Moderación")
  message.channel.send(embed); 
}else if(args[0].toLowerCase() == "tempban"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -tempban (@usuario) (tiempo) (razón)", "Este comando te permite eliminar a un usuario por un tiempo determinado de " + server.name); 
  embed.setTitle("Tempban | Moderación")
  message.channel.send(embed); 
}else if(args[0].toLowerCase() == "tempmute"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -tempmute (@usuario) (tiempo) (razón)", "Este comando te permite silenciar a un usuario temporalmente de " + server.name); 
  embed.setTitle("Tempmute | Moderación")
  message.channel.send(embed); 
  
  }else if(args[0].toLowerCase() == "unmute"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -unmute (@usuario)", "Este comando te permite desilenciar a un usuario de " + server.name); 
  embed.setTitle("Unmute | Moderación")
  message.channel.send(embed); 
    
    }else if(args[0].toLowerCase() == "unban"){
  
  var server = message.guild;
  embed.addField("Modo de uso: -unban (id)", "Este comando te permite permitirle el ingreso nuevamente a un exusuario de " + server.name); 
  embed.setTitle("Unban | Moderación")
  message.channel.send(embed); 
}   
  
  
  } 
  
  
  
    
