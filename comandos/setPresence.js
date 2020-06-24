const Discord = require('discord.js');

module.exports = (client, message, args) => { 
if (!args) {
  args = null;"Pon algo"

}

client.user.setPresence({
       status: "online",
       game: {
           name: args.join(" "),
           type: "PLAYING"
       }
   });
   
message.channel.send('Cambiado a: '+ args.join(" "));

}