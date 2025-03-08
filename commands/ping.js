const os = require('os');

async function pingCommand(sock, chatId) {
    try {
        const start = Date.now();

        // Get system info
        const uptime = process.uptime();
        const ram = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);
        const platform = os.platform();

        // Calculate ping
        const pretext = '*Pong...*';
        const end = Date.now();
        const ping = end - start;

        const message = `*⚡ Ping:* ${ping}ms\n` +
            `*🔄 Uptime:* ${formatTime(uptime)}\n`;

        let sent_msg = await sock.sendMessage(chatId, { text: pretext });

        await new Promise(resolve => setTimeout(resolve, 500));

        await sock.sendMessage(chatId, {
            text: message,
            edit: sent_msg.key
        });

    } catch (error) {
        console.error('Error in ping command:', error);
        await sock.sendMessage(chatId, { text: 'Failed to get ping status.' });
    }
}

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0) time += `${seconds}s`;

    return time.trim();
}

module.exports = pingCommand;