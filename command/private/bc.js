const { sleep } = require("../../utils");
module.exports = {
    name: "broadcast",
    alias: ['bcc'],
    category: "private",
    async exec(msg, sock, args, store) {
    let code = args.join(" ");
    if (!code) return await msg.reply("What your Owner?");
    let data = await store.chats.all()
    for (let i of data) {
    await sock.sendMessage(i.id, { text: `${code}\n\n_*Broadcast Message*_` }, { quoted: msg });
    await sleep(1000)
    }
}
}
