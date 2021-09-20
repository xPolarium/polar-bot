const fs = require("fs");

module.exports = (client) => {
	const loadDir = (dir) => {
		const eventFiles = fs
			.readdirSync(`./events/${dir}`)
			.filter((file) => file.endsWith(".js"));

		eventFiles.forEach((fileName) => {
			const event = require(`../events/${dir}/${fileName}`);
			if (event.once) {
				client.once(event.name, (...args) => event.execute(...args));
			} else {
				client.on(event.name, (...args) => event.execute(...args));
			}
		});
	};

	["client", "guild"].forEach((dir) => loadDir(dir));
};
