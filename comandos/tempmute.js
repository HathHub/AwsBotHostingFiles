const Discord = require("discord.js");

module.exports = async (bot, message, args, ms) => {


  let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("No puedo mutearlo");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Por favor, especifica una razon");
  if(!message.guild.me.hasPermission("MANAGE_ROLES")) 
  return message.channel.send("No tienes permisos.")
  
  let muterole = message.guild.roles.find(role => role.name === "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Especifica un tiempo");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute ejecutado por ${message.author}`)
  .setColor("#00e059")
  .addField("Usuario", tomute)
  .addField("Muteado en", message.channel)
  .addField("Tiempo", message.createdAt)
  .addField("Duracion", mutetime)
  .addField("Razon", reason);

  let channel = message.guild.channels.find(c => c.name === "┊⚠┊・⚒・logs");
  if(!channel) return message.reply("Primero queda un canal de logs!");
  channel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
  }, ms(mutetime));
}  