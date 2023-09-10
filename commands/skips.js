const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skips')
		.setDescription('Do you know who else ?'),
	async execute(message) {
    var channel = message.channel.id
		message.channel.messages.fetch({limit: 1}).then(async msg => {
     const fetchedMsg = msg.first()
      const actualMsg = fetchedMsg.content
      const messageFormat = "Hey Skips, do you know who else"  + " " + actualMsg
       message.reply(messageFormat)
    })
	},
};
