const { ShardingManager } = require("discord.js");
const config = require("./config/config.json");
const shards = new ShardingManager("./src/bot/bot.js", {
  token: config.TOKEN,
  totalShards: "auto",
});

shards.on("shardCreate", (shard) => {
  console.log(
    `[${new Date().toString().split(" ", 5).join(" ")}] Launched shard ${
      shard.id
    }`
  );
});

shards.spawn(shards.totalShards, 10000);

// For replit User's, Use uptimerobot to make your bot alive 24/7

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Running Successfully');
}

const server = http.createServer(requestListener);
server.listen(443);
