const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rise')
		.setDescription('Replies with info about Rise!'),
	async execute(interaction) {
		await interaction.reply("The wondeful Rise is who you've got to thank for slash commands being added!");
	},
};