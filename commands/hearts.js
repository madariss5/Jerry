async function heartAnimCommand(sock, chatId) {
    try {
        const emojis = [
            "❤", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎",
            "❤", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎",
            "❤", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎",
            "❤", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", ""
        ];

        let sent_msg = await sock.sendMessage(chatId, { text: emojis[0] });

        for (let i = 1; i < emojis.length; ++i) {
            await new Promise(resolve => setTimeout(resolve, 500));
            await sock.sendMessage(chatId, {
                text: emojis[i],
                edit: sent_msg.key,
            });
        }
    } catch (error) {
        console.error('Error in heartAnim command:', error);
    }
}

module.exports = heartAnimCommand;
// 🫶🏻
