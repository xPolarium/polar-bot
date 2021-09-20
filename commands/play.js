const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const { execute } = require("./server");

module.exports = {
	name: "play",
	aliases: ["skip", "stop"],
	cooldown: 0,
	description: "Polarium's personal music bot",

	async execute(interaction, args) {},
};
