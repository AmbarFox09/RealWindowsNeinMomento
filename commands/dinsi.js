const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dinsi')
		.setDescription('sussy'),
	async execute(interaction) {
		await interaction.reply('OHHHH MAHHH GOOOD');
	},
};