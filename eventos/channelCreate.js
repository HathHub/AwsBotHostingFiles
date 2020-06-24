const db = require("megadb");
const megadb = require("megadb"); 
const registros = new db.crearDB("Canal_logs");
module.exports = async (channel, client, message, args) => {
//actualizado a la ultima version de discord.js 
  let canallogs = await registros.get(`${message.guild.id}.logs`)
 let canal = client.channels.cache.get(canallogs);
  const entry = await message.guild.fetchAuditLogs({type:'CHANNEL_CREATE'}).then(audit => audit.entries.first())//aqui obtenemos el primer log que se crea cuando un canal es creado

  let user = entry.executor.username//este es el usuario que creo el canal



  canal.send(`El usuario ${user} ha creado el canal <#${channel.id}>`)

/*
Estos son todos los tipos de logs que puedes obtener
GUILD_UPDATE
CHANNEL_CREATE
CHANNEL_UPDATE
CHANNEL_DELETE
CHANNEL_OVERWRITE_CREATE
CHANNEL_OVERWRITE_UPDATE
CHANNEL_OVERWRITE_DELETE
MEMBER_KICK
MEMBER_PRUNE
MEMBER_BAN_ADD
MEMBER_BAN_REMOVE
MEMBER_UPDATE
MEMBER_ROLE_UPDATE
ROLE_CREATE
ROLE_UPDATE
ROLE_DELETE
INVITE_CREATE
INVITE_UPDATE
INVITE_DELETE
WEBHOOK_CREATE
WEBHOOK_UPDATE
WEBHOOK_DELETE
EMOJI_CREATE
EMOJI_UPDATE
EMOJI_DELETE
MESSAGE_DELETE
*/  

}