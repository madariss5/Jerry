require('dotenv').config();

const settings = {
  packname: 'Jerry',
  author: 'Bot',
  botName: "Jerry Bot",
  botOwner: process.env.BOT_OWNER, // Your name
  ownerNumber: process.env.OWNER_NUMBER, //Your number
  logGroupID: process.env.LOG_GROUP_ID, // create a group and put jid here
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: process.env.COMMAND_MODE,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "1.0.0",
};

module.exports = settings;
