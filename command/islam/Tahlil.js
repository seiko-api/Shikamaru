const { fetchJson } = require("../../utils");

module.exports = {
    name: "Tahlil",
    category: "Islami",
    desc: "Islami Tahlil",
    async exec(msg, sock) {
        try {
            let list = ['tahlil', 'thlil']
            const { anu } = await fetchJson(`https://api.dapuhy.xyz/api/islam/tahlil?apikey=seikonub`);
            let txt = `• Id : ${anu.result.id}\n• Title : ${anu.result.title}\n• Arabic : ${anu.result.arabic}\n• Translation : ${anu.result.translation}\n\n*› Source : ${anu.source}*`
            await sock.sendMessage(msg.from, { text: txt }, { quoted: msg });
        } catch (e) {
            await sock.sendMessage(msg.from, { text: `Something bad happend\n${e.message}` }, { quoted: msg });
        }
    }
}
