const db = require("megadb")
const db_marry = new db.crearDB("marry")
const Discord = require("discord.js")
const fs = require("fs");

module.exports = async (client, message, args) => {

    const usuario = message.mentions.users.first() ||  client.users.cache.get(args[0]);

  if(!db_marry.tiene(message.author.id)) return message.channel.send("No estas casado")
        message.channel.send("Ahora eres libre.") // Envia este mensaje si la respuesta de la persona que mencionaron es "yes"
        let Data = await db_marry.get(`${message.author.id}`); //Key

db_marry.delete(`${message.author.id}`) //key
db_marry.delete(`${Data.id}`); //key pero con quien esta casado/a // Enviamos esto a la base de datos.
        
    }  
      
    
  

