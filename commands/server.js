const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("server")
		.setDescription("Replies back with server info."),
	async execute(interaction) {
		await interaction.reply(
			// eslint-disable-next-line comma-dangle
			`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
		);
	},
};
