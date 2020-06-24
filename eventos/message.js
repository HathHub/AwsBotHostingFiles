const ytdl = require('ytdl-core');
const search = require('youtube-search');
//Esta función se activara por cada mensaje enviado en un canal por el usuario:
const fs = require('fs'); 
//const db = JSON.parse(fs.readFileSync("./db.json", "utf8"));
const db = require("megadb");
const prefijos_db = new db.crearDB("prefijos");
let config = require("../config.js");
const queue = new Map();

module.exports = async(client, message) => { 
    if(message.author){ //si el mensaje es el autor
      if(client.afk.get(message.author.id)){
         client.afk.delete(message.author.id),
        message.channel.send(`${message.author} Bienvenido de vuelta, te he quitado el AFK`)
      //si el autor esta en el afk, lo elimina
        message.member.setNickname(message.author.username)
        return;
      }
      //restaura a su nombre
      
    } 

  if(message.author.bot) return;
  if (message.channel.type === 'dm') return message.channel.send(`No respondo por privado, para usar mis comandos debes hablarme en un servidor `);
  
  
  if(message.mentions.users.first()){ //si hubo una mencion
   let u = client.afk.get(message.mentions.users.first().id); //obtienes al mencionado del afk
    if(u){
      message.channel.send("Usuario AFK con la Razón: " + u.reason) //manda mensaje
    }
  }
  
let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

if (message.content.match(RegMention)) { //Creamos la condicional
    message.channel.send(`El mensaje que respondera el bot`)
}

  if(!message.content.startsWith(client.config.prefix)) return; 
  // Definiendo los argumentos y comandos.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()

  client.music = require("dqq-music");
 
client.music.start(client, {
  youtubeKey: "AIzaSyAbikE-1Yj32P9GDGaH8dm7tYgz0jeE72k",//Your youtube api key here
  anyoneCanSkip: true,//true or false
  botPrefix: (config.prefix),//prefix 1
  defaultPrefix: "!",//prefix 2
  musicPresence: true,//true or false
  ownerOverMember: true,//true or false
  ownerID: "696481341566615664",//id owner
});
  
  
  // Manejando los eventos.
  let cooldown = new Set();
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if(!cmd) return; // Si no hay comandos no ejecute nada.
  
  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
cmd(client, message, args);
 
}
 