const fs = require("fs");

module.exports = (client) => {
	const commandFiles = fs
		.readdirSync("./commands/")
		.filter((file) => file.endsWith(".js"));

	commandFiles.forEach((file) => {
		const command = require(`../commands/${file}`);
		client.commands.set(command.data.name, command);
	});
};
