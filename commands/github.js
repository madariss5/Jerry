async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖 JerrryBoT*

*📂 GitHub Repository:*
https://github.com/

*📢 Official Channel:*
https://youtube.com/@oreotrails

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, {
            text: '❌ Error fetching repository information.'
        });
    }
}

module.exports = githubCommand;
