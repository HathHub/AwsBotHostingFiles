const Discord = require("discord.js");

module.exports = async (bot, msg, args, message) => {
var guild = message.guild;
if(!args) return message.channel.send('Ingrese el nombre del rol a crear.');

var perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");
if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");

message.guild.createRole({
      name: args,
      color: 'BLUE'
}).then(role => message.channel.send('Nuevo rol creado: '+role+'.'));
}