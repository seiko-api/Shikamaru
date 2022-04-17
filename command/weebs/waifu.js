const { fetchJson } = require("../../utils");

module.exports = {
    name: "waifu",
    category: "weebs",
    desc: "Waifu anime image",
    async exec(msg, sock) {
        try {
            let list = ['waifu']
            const { url } = await fetchJson(`https://api.waifu.pics/sfw/waifu`);
            await sock.sendMessage(msg.from, { image: { url } }, { quoted: msg });
        } catch (e) {
            await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
        }
    }
}