const { Client, Collection, Intents } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
client.events = new Collection();

["CommandHandler", "EventHandler"].forEach((fileName) => {
	require(`./handlers/${fileName}`)(client);
});

client.login(token);
