const { resolve } = require("path");

async function hackCommand(sock, chatId) {
    try {

        const animChar1 = [
            "Installing Files To Hacked Private Server...",
            "Target Selected.",
            "Installing... 0%\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ",
            "Installing... 4%\n█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ",
            "Installing... 8%\n██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ",
            "lnstallig... 20%\n█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ",
            "Installing... 36%\n█████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ",
            "Installing... 52%\n█████████████▒▒▒▒▒▒▒▒▒▒ ",
            "Installing... 84%\n███████████████▒▒▒▒ ",
            "Installing... 100%\n██████Installed███████ ",
            "Target files Uploading...\n\nDirecting To Remote  server to hack.."
        ];


        let firstmsg = await sock.sendMessage(chatId, { text: 'Installing..' });

        for (let i = 0; i < animChar1.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 700));
            await sock.sendMessage(chatId, {
                text: animChar1[i],
                edit: firstmsg.key
            });
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        await sock.sendMessage(chatId, {
            text: 'Connecting and getting combined token from web.whatsapp.com',
            edit: firstmsg.key
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const animChar2 = [
            "root@anon:~#",
            "root@anon:~# ls",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~#",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~#",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...\nvictim detected in ghost ...",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...\nvictim detected in ghost ...\n\nAll Done!",
            "root@anon:~# ls\n\n  usr  ghost  codes  \n\nroot@anon:~# # So Let's Hack it ...\nroot@anon:~# touch setup.py\n\nsetup.py deployed ...\nAuto CMD deployed ...\n\nroot@anon:~# trap whoami\n\nwhoami=user\nboost_trap on force ...\nvictim detected  in ghost ...\n\nAll Done!\nInstalling Token!\nToken=DJ65gulO90P90nlkm65dRfc8I"
        ];

        for (let i = 0; i < animChar2.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 700));
            await sock.sendMessage(chatId, {
                text: animChar2[i],
                edit: firstmsg.key
            });
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        await sock.sendMessage(chatId, {
            text: 'starting whatsapp hack',
            edit: firstmsg.key
        });

        await new Promise(resolve => setTimeout(resolve, 1000));

        const animChar3 = [
            "hacking... 0%completed.\nTERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (1.3) kB",
            "hacking... 4% completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Package",
            "hacking.....6% completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target account chat\n lding chat tg-bot bruteforce finished",
            "hacking.....8%completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target account chat\n lding chat tg-bot bruteforce finished\n creating pdf of chat",
            "hacking....15%completed\n Terminal:chat history from Whatsapp exporting to private database.\n terminal 874379gvrfghhuu5tlotruhi5rbh installing",
            "hacking....24%completed\n TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target account chat\n lding chat tg-bot bruteforce finished\nerminal:chat history from Whatsapp exporting to private database.\n terminal 874379gvrfghhuu5tlotruhi5rbh installed\n creting data into pdf",
            "hacking....32%completed\n looking for use history \n downloading-Whatsapp -id prtggtgf . gfr (12.99 mb)\n collecting data starting imprute attack to user account\n chat history from Whatsapp exporting to private database.\n terminal 874379gvrfghhuu5tlotruhi5rbh installed\n creted data into pdf\nDownload sucessful Bruteforce-Whatsapp-0.1.tar.gz (1.3)",
            "hacking....38%completed\n\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Package\n  Downloading Whatsapp-Data-Sniffer-7.1.1-py2.py3-none-any.whl (82 kB): finished with status 'done'\nCreated wheel for Whatsapp: filename=Whatsapp-Data-Sniffer-0.0.1-py3-none-any.whl size=1306 sha256=cb224caad7fe01a6649188c62303cd4697c1869fa12d280570bb6ac6a88e6b7e",
            "hacking....52%completed\nexterting data from Whatsapp private server\ndone with status 36748hdeg \n checking for more data in device",
            "hacking....60%completed\nmore data found im target device\npreparing to download data\n process started with status 7y75hsgdt365ege56es \n status changed to up",
            "hacking....73% completed\n downloading data from device\n process completed with status 884hfhjh\nDownloading-0.1.tar.gz (9.3 kB)\nCollecting Data Packageseeing target\n lding chat tg-bot bruteforce finished\n creating pdf of chat",
            "hacking...88%completed\nall data from Whatsapp private server downloaded\nterminal download sucessfull--with status jh3233fdg66y yr4vv.irh\n data collected from tg-bot\nTERMINAL:\n Bruteforce-Whatsapp-0.1.tar.gz (1.3)downloaded",
            "100%\n██████HACKED████████ \n\n\n  TERMINAL:\nDownloading Bruteforce-Whatsapp-0.1.tar.gz (9.3 kB)\nCollecting Data Package\n  Downloading Whatsapp-Data-Sniffer-7.1.1-py2.py3-none-any.whl (82 kB)\nBuilding wheel for Tg-Bruteforcing (setup.py): finished with status 'done'\nCreated wheel for Whatsapp: filename=Whatsapp-Data-Sniffer-0.0.1-py3-none-any.whl size=1306 sha256=cb224caad7fe01a6649188c62303cd4697c1869fa12d280570bb6ac6a88e6b7e\n  Stored in directory: ",
            "account hacked\n collecting all data\n converting data into pdf",
            "pdf created click link below to download data\n\nDon't worry only i can open this 😎😎..\n\nIf u don't Believe me, try to download 🙂\n\nhttps://drive.google.com/file/d/1JNA0HY1v8ClBDU9PhmyQ-z8KuLgvteT5/view?usp=sharing"
        ];

        for (let i = 0; i < animChar3.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await sock.sendMessage(chatId, {
                text: animChar3[i],
                edit: firstmsg.key
            });
        }

    } catch (error) {
        console.error('Error in hackCommand:', error);
    }
}

module.exports = hackCommand;
// 2 1 1 1 1 1 1 1 2 1 1 0.5 2 1
