const Discord = require("discord.js");
const config = require('../config.js'); 
module.exports = (client, message, args) => { 
  
  
  if(!args[0]){
  
    const embeddefault = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle("Comandos de Desarollador")
    .setDescription("```ERR: especifica el comando que quieres usar.```")
    .addField("`restart`", "Reinicia el bot.")
    .addField("`servidores`", "Mapea todos los servidores en los que el bot se encuentra")
    .addField("`usuarios`", "Mapea todos los usuarios de todos los servidores en los que el bot se encuentra")
    .addField("`whois`", "Obtiene información especifica sobre un usuario mediante su id.")
  
    message.channel.send(embeddefault)

}else if(args[0].toLowerCase() == "servidores"){
  
  if(message.author.id !== '696481341566615664') return message.reply("Solo Para El Developer Del Bot");
  
// AquÃ­ estaremos mapeando los nombres de los servidores.
  let guild = message.guild;
let mapServer = client.guilds.cache.map(e => '- ' + e.toString() + '\n').join(" ");
 
// Creamos un embed y agregamos la variable "mapServer" con el texto mapeado anteriormente.
let embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setAuthor(client.user.username, client.user.displayAvatarURL())
.setTitle(`Estos son los servidores en los que se encuentra el bot`)
  .setDescription(mapServer);

// Enviamos el embed
message.channel.send(embed); 

  
  
}else if(args[0].toLowerCase() == "restart"){
  
  
      if(message.author.id !== '696481341566615664') return message.reply("Solo Para El Developer Del Bot");
     message.channel.send("Reiniciando...").then(async msg => {
        msg.edit("Restarting...")
        await msg.edit("Restarting, please wait...")
        msg.edit("Success!")
       setTimeout(() => { process.exit() }, 2000)
    })
  
  let creador = client.users.cache.get("696481341566615664")
  
  const embedrestart = new Discord.MessageEmbed()
  .setTitle(`Reiniciando el Bot`)
  .setColor(config.color)
  
 creador.send({ embed: embedrestart })
  
  
  }else if(args[0].toLowerCase() == "whois"){
    
    if(message.author.id !== '696481341566615664') return message.reply("Solo Para El Developer Del Bot");
    

    
    let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!args[1]) return message.channel.send('Invalid argument` No mencionaste a nadie o no pusiste ID');
    
            let roles = message.guild.roles.cache.map(r => `${r}`).join(' ').slice(10) || "None"
          
            if(!person) return message.channel.send("No se pudo encontrar al usuario.");

            var permissions = [];

            if(person.hasPermission('ADMINISTRATOR')) { 
            permissions.push('Administrator')
            }
            if(person.hasPermission('MANAGE_ROLES')) { 
            permissions.push('Manage Roles')
            }
            if(person.hasPermission('KICK_MEMBERS')) {
            permissions.push('Kick Members')
            }
            if(person.hasPermission('BAN_MEMBERS')) {
            permissions.push('BAN Members')
            }
            if(person.hasPermission('MANAGE_NICKNAMES')) {
            permissions.push('Manage Nicknames')
            }
            if(person.hasPermission('MANAGE_EMOJIS')) {
            permissions.push('Manage Emojis')
            }
            if(person.hasPermission('MANAGE_NICKNAMES')) {
            permissions.push('Manage Nicknames')
            }
            if(person.hasPermission('MANAGE_WEBHOOKS')) {
            permissions.push('Manage Webhooks')
            }
            if(person.hasPermission('MANAGE_MESSAGES')) { 
            permissions.push('Manage Messages')
            }
            if(person.hasPermission('MENTION_EVERYONE')) { 
            permissions.push('Mention Everyone')
            }
            if(person.hasPermission('MUTE_MEMBERS')) { 
            permissions.push('Mute Members')
            }
            if(person.hasPermission('DEAFEN_MEMBERS')) { 
            permissions.push('Deafen Members')
            }
    if(person.hasPermission('SPEAK')) { 
            permissions.push('Speak')
      }
            if(permissions.length == 0){
            permissions.push("None");
            
            } 
            
            const embed = new Discord.MessageEmbed()
            .setColor(config.color)
            .setAuthor(person.user.tag, person.user.avatarURL)
            .setThumbnail(person.user.avatarURL)
            .addField('Usuario', person.user)
            .addField('Se Registro', person.user.createdAt, true)
            .addField('Se unio', person.joinedAt, true)
            .addField(`Roles`, roles)
            .addField('Permisos', `${permissions.join(', ')}`)        
            .setFooter(`ID: ${person.id} | Jugando: ${person.presence.status}`)
            .setTimestamp()
            message.channel.send( {embed} );
            

    
    }else if(args[0].toLowerCase() == "usuarios") {
      
let mapUsers = client.users.cache.map(a=>a.tag)
    


const mapusers = new Discord.MessageEmbed()
.setDescription(mapUsers)
.setColor(config.color)
message.channel.send( {embed : mapusers} );

  }
  }  