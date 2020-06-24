const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member) => {

 
  setInterval(function() {

    var estados = [`-help | Estoy en ${client.guilds.cache.size} servidores.`, `-donate para aportar al bot.`, `Road to Verified Bot Developer ${client.guilds.cache.size}/75`,`-bugreport por sí te encuentras algún error.`, `-botsuggest para mandarle una sugerencia al creador`]

    let estado = estados[Math.floor(estados.length * Math.random())];

    client.user.setPresence({
      status: "online",
      activity: {
        name: estado,
        type: "WATCHING",
      }
    })


  }, 60000);
  
      };
  