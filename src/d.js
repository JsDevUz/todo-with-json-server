const { Telegraf } = require("telegraf");
const fs = require("fs");

const bot = new Telegraf("5954692656:AAGiIsKGa6bG3PTjJxK04MGp8rEps4nODNY");
const krillalif = "йцукенгшщзхфывапролджэячсмитьбю";
const admin = "1261385122";
bot.start(async (ctx) => {
  let newtext = `Salom ushbu bot krill va lotin alifbosiga matiningizni o'grib beradi.Shunchaki matnni kiriting qolganini o'zi bajaradi.\n`;
  fs.open(`${ctx.chat.id}.txt`, "w+", () => {});
  fs.writeFile(`./${ctx.chat.id}.txt`, "start", () => {});
  fs.readFile(`./users.txt`, "utf8", (err, data) => {
    if (!(data.indexOf(ctx.chat.id) + 1) || data.length == 0) {
      fs.writeFile("./users.txt", `${data}\n${ctx.chat.id}`, () => {});
    }
  });
  bot.telegram.sendMessage(ctx.chat.id, newtext);
});

bot.on("text", async (ctx) => {
  if (ctx.message.text == "/start") return;

  if (ctx.message.text == "/users") {
    if (ctx.chat.id == admin) {
      fs.readFile(`./users.txt`, "utf8", (err, data) => {
        bot.telegram.sendMessage(
          ctx.chat.id,
          `Foydalanuvchilar soni ${data.split("\n").length} ta`
        );
      });
    }
  }

  const status = krillalif
    .split("")
    .some((alif) => ctx.message.text.indexOf(alif) + 1)
    ? "krill"
    : "lotin";

  if (status == "lotin") {
    let newtext = ctx.message.text.replace(/ya/g, "я");

    newtext = newtext.replace(/`/g, "‘");
    newtext = newtext.replace(/'/g, "‘");

    newtext = newtext.replace(/yu/g, "ю");
    newtext = newtext.replace(/ye/g, "е");

    newtext = newtext.replace(/sh/g, "ш");
    newtext = newtext.replace(/ch/g, "ч");
    newtext = newtext.replace(/ng/g, "нг");

    newtext = newtext.replace(/g‘/g, "ғ");
    newtext = newtext.replace(/ģ/g, "ғ");
    newtext = newtext.replace(/o‘/g, "ў");
    newtext = newtext.replace(/ò/g, "ў");

    newtext = newtext.replace(/a/g, "а");
    newtext = newtext.replace(/b/g, "б");
    newtext = newtext.replace(/d/g, "д");
    newtext = newtext.replace(/e/g, "е");
    newtext = newtext.replace(/f/g, "ф");
    newtext = newtext.replace(/g/g, "г");
    newtext = newtext.replace(/h/g, "х");
    newtext = newtext.replace(/i/g, "и");
    newtext = newtext.replace(/j/g, "ж");
    newtext = newtext.replace(/k/g, "к");
    newtext = newtext.replace(/l/g, "л");
    newtext = newtext.replace(/m/g, "м");
    newtext = newtext.replace(/n/g, "н");
    newtext = newtext.replace(/o/g, "о");
    newtext = newtext.replace(/p/g, "п");
    newtext = newtext.replace(/q/g, "қ");
    newtext = newtext.replace(/r/g, "р");
    newtext = newtext.replace(/s/g, "с");
    newtext = newtext.replace(/t/g, "т");
    newtext = newtext.replace(/u/g, "у");
    newtext = newtext.replace(/v/g, "в");

    newtext = newtext.replace(/y/g, "й");
    newtext = newtext.replace(/z/g, "з");

    newtext = newtext.replace(/Ya/g, "Я");
    newtext = newtext.replace(/Yu/g, "Ю");
    newtext = newtext.replace(/Ye/g, "Е");

    newtext = newtext.replace(/Sh/g, "Ш");
    newtext = newtext.replace(/Ch/g, "Ч");
    newtext = newtext.replace(/Ng/g, "Нг");

    newtext = newtext.replace(/G‘/g, "Ғ");
    newtext = newtext.replace(/Ģ/g, "Ғ");
    newtext = newtext.replace(/Ò/g, "Ў");
    newtext = newtext.replace(/O‘/g, "Ў");

    newtext = newtext.replace(/A/g, "А");
    newtext = newtext.replace(/B/g, "Б");
    newtext = newtext.replace(/D/g, "Д");
    newtext = newtext.replace(/E/g, "Э");
    newtext = newtext.replace(/F/g, "Ф");
    newtext = newtext.replace(/G/g, "Г");
    newtext = newtext.replace(/H/g, "Х");
    newtext = newtext.replace(/I/g, "И");
    newtext = newtext.replace(/J/g, "Ж");
    newtext = newtext.replace(/K/g, "К");
    newtext = newtext.replace(/L/g, "Л");
    newtext = newtext.replace(/M/g, "М");
    newtext = newtext.replace(/N/g, "Н");
    newtext = newtext.replace(/O/g, "О");
    newtext = newtext.replace(/P/g, "П");
    newtext = newtext.replace(/Q/g, "Қ");
    newtext = newtext.replace(/R/g, "Р");
    newtext = newtext.replace(/S/g, "С");
    newtext = newtext.replace(/T/g, "Т");
    newtext = newtext.replace(/U/g, "У");
    newtext = newtext.replace(/V/g, "В");

    newtext = newtext.replace(/Y/g, "Й");
    newtext = newtext.replace(/Z/g, "З");

    await ctx.reply(newtext);
  }
  if (status == "krill") {
    let newtext = ctx.message.text.replace(/я/g, "ya");

    newtext = newtext.replace(/ю/g, "yu");
    newtext = newtext.replace(/е/g, "ye");
    newtext = newtext.replace(/е/g, "ye");
    newtext = newtext.replace(/Ц/g, "ts");
    newtext = newtext.replace(/ц/g, "ts");
    newtext = newtext.replace(/е/g, "ye");
    newtext = newtext.replace(/ь/g, "");
    newtext = newtext.replace(/ы/g, "");
    newtext = newtext.replace(/Ь/g, "");
    newtext = newtext.replace(/Ы/g, "");

    newtext = newtext.replace(/ш/g, "sh");
    newtext = newtext.replace(/щ/g, "sh");
    newtext = newtext.replace(/ч/g, "ch");
    newtext = newtext.replace(/нг/g, "ng");

    newtext = newtext.replace(/а/g, "a");
    newtext = newtext.replace(/б/g, "b");
    newtext = newtext.replace(/д/g, "d");
    newtext = newtext.replace(/э/g, "e");
    newtext = newtext.replace(/ф/g, "f");
    newtext = newtext.replace(/г/g, "g");
    newtext = newtext.replace(/х/g, "h");
    newtext = newtext.replace(/и/g, "i");
    newtext = newtext.replace(/ж/g, "j");
    newtext = newtext.replace(/к/g, "k");
    newtext = newtext.replace(/л/g, "l");
    newtext = newtext.replace(/м/g, "m");
    newtext = newtext.replace(/н/g, "n");
    newtext = newtext.replace(/о/g, "o");
    newtext = newtext.replace(/п/g, "p");
    newtext = newtext.replace(/қ/g, "q");
    newtext = newtext.replace(/р/g, "r");
    newtext = newtext.replace(/с/g, "s");
    newtext = newtext.replace(/т/g, "t");
    newtext = newtext.replace(/у/g, "u");
    newtext = newtext.replace(/в/g, "v");
    newtext = newtext.replace(/ғ/g, "g‘");
    newtext = newtext.replace(/ў/g, "o‘");
    newtext = newtext.replace(/й/g, "y");
    newtext = newtext.replace(/з/g, "z");

    newtext = newtext.replace(/Я/g, "Ya");
    newtext = newtext.replace(/Ю/g, "Yu");
    newtext = newtext.replace(/Е/g, "Ye");

    newtext = newtext.replace(/Ш/g, "Sh");
    newtext = newtext.replace(/Щ/g, "Sh");
    newtext = newtext.replace(/Ч/g, "Ch");
    newtext = newtext.replace(/Нг/g, "Ng");

    newtext = newtext.replace(/А/g, "A");
    newtext = newtext.replace(/Б/g, "B");
    newtext = newtext.replace(/Д/g, "D");
    newtext = newtext.replace(/Э/g, "E");
    newtext = newtext.replace(/Ф/g, "F");
    newtext = newtext.replace(/Г/g, "G");
    newtext = newtext.replace(/Х/g, "H");
    newtext = newtext.replace(/И/g, "I");
    newtext = newtext.replace(/Ж/g, "J");
    newtext = newtext.replace(/К/g, "K");
    newtext = newtext.replace(/Л/g, "L");
    newtext = newtext.replace(/М/g, "M");
    newtext = newtext.replace(/Н/g, "N");
    newtext = newtext.replace(/О/g, "O");
    newtext = newtext.replace(/П/g, "P");
    newtext = newtext.replace(/Қ/g, "Q");
    newtext = newtext.replace(/Р/g, "R");
    newtext = newtext.replace(/С/g, "S");
    newtext = newtext.replace(/Т/g, "T");
    newtext = newtext.replace(/У/g, "U");
    newtext = newtext.replace(/В/g, "V");
    newtext = newtext.replace(/Ғ/g, "G‘");
    newtext = newtext.replace(/Ў/g, "O‘");
    newtext = newtext.replace(/Й/g, "Y");
    newtext = newtext.replace(/З/g, "Z");

    await ctx.reply(newtext);
  }
});
bot.launch();
