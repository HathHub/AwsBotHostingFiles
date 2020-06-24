const Discord = require('discord.js');

module.exports = (client, message, args) => {

let user = message.mentions.users.first();
if (!user) user = message.author;

  let embed = new Discord.MessageEmbed()
    .setImage(`${user.displayAvatarURL}`)
    .setColor("#dd00ff")
    .setFooter((message.author == user)?`Tu avatar ${user.tag}`:`Avatar de ${user.tag}`);

  message.channel.send(embed);
};

