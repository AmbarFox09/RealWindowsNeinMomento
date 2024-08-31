const { get } = require("https");

//checks for 429 errors at startup and every 5 minutes (immortality moment)
function handleRateLimit() {
    get(`https://discord.com/api/v10/gateway`, ({ statusCode }) => {
        if (statusCode == 429) { process.kill(1) }
    });
};
handleRateLimit();
setInterval(handleRateLimit, 3e5); //3e5 = 300000 (3 w/ 5 zeros)

//funcs
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Cenas Importantes
const express = require("express");
const app = express();
var currentdate = new Date();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world UWU");
})

const Discord = require("discord.js");
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Discord.Client({
  intents: [
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
  ]
})

//stupid slash command stuff
const fs = require('node:fs');
const path = require('node:path');
const { Collection, Events } = require('discord.js');

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
    console.log(`haha I have successfully ran a cmd`);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//mandar autism creature a toda a gente que entrar no sv
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get('995329036039491646');    
    const TOAST = ["Bem-vindo ao melhor círculo satânico ever", "aconselho-te a sair", "me when someone joins:", "hello im undardawater plis elp me", "Yippe !", "hmmm", "wealcome to chaos", "im scared", "bem vindo à retardação metafísica"]
    const ACTUALTOAST = TOAST[Math.floor(Math.random() * TOAST.length)]
    channel.send(ACTUALTOAST)
    channel.send("https://cdn.discordapp.com/attachments/995331136903458938/1079845383448035508/videoplayback.mp4")
    console.log("looks like someone joined !!!")
    console.log(ACTUALTOAST)
});

//Texto Simples
client.on("messageCreate", message => {
if(message.author.bot) return false;
  
  if(message.content === "Are you alive ?") {
    message.channel.send("Imagine being alive, cringe...")
  }
  if(message.content === "What are you ?") {
    message.channel.send("a social experiment")
  }
  if(message.content === "no u") {
    message.channel.send("uno reverse card <:ReverseCard:995733282090135613>")
  }
  if(message.content === "<:ReverseCard:995733282090135613>") {
    message.channel.send("no u <:naifaCard:997213658155319336>")
  }
  if(message.content === "Papel") {
    message.channel.send("Tesoura")
  }
  if(message.content === "Tesoura") {
    message.channel.send("Pedra")
  }
  if(message.content === "Pedra") {
    message.channel.send("Papel")
  }
  if(message.content === "yatta") {
    message.channel.send("This move, reverse all creations <:yatta:995423875364036658>")
  }
  if(message.content === "wenomechainsama") {
    message.channel.send("tumajarbisaun")
  }
  if(message.content === "wifenlooof") {
    message.channel.send("eselifterbraun")
  }
  if(message.content === "piracy") {
  message.channel.send("https://cdn.discordapp.com/attachments/1064661269086486601/1276221506942144543/9e5b66896097eef249edf29f59dbe84bb18b3a3ef8db3df4fb03ec59f7a63a43.mp4?ex=66c8bd66&is=66c76be6&hm=af3f7fabd349d92093e952b04301b7ce22d2a221d5127cb1d137ab6dcf514e42&")
  }
  if(message.content === "!deez") {
    message.channel.send("nuts")
  }
  if(message.content === "!pop") {
    message.channel.send("||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||||pop!||")
  }
  if(message.content === "!deez nuts") {
    message.channel.send("AHHAHAHAH SO FUNNI")
  }  
  if(message.content === "!ping") {
    message.channel.send("@everyone")
  }
  if(message.content === "!help") {
    message.channel.send("How to get a discord js bot workin on linux \n \n clone ur repo \nget yerself tmux and npm/node.js \nsudo apt-get update && sudo apt-get -y install tmux \n sudo apt-get install nodejs -y \n npm init \n npm install discord.js --save \nexport token=[the motahfuckin token] \n tmux new -s DiscordBot \n node index.js \n ")
  }
  if(message.content === "Boa noite") {
    message.channel.send("ACORDA PARA A VIDA BOI")
  }
  if(message.content === "Howdy") {
    message.channel.send("https://tenor.com/view/undertale-asriel-asriel-dreemurr-hair-cut-fade-gif-20015484")
  }
  if(message.content === "!amogus") {
    message.channel.send(".\n                                     ⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀\n                                  ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀\n                              ⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷\n                              ⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠛⠛⠛⠿⠿⣿⣷⣄\n                             ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷\n         ⢀⣠⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀⠀⠀⢸⣿⣇\n⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣤⣤⣤⣤⣤⣤⣴⣶⣿⣿⡿\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁\n⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿\n ⠙⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n                 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n                ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n                 ⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿\n                  ⢻⣿⣿⣿⡿⣟⣯⣿⠟⡉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿\n                    ⠻⢿⣽⣿⣿⣿⠿⠿⠟⠒⠉⠉⠉⠉⠉⠉⠉⠙⠋\n                       ⠈⠿⠋⠉⢀⣠⣤⣤⡔⣄\n                          ⣴⠾⠛⠋⠉⠀⢀⣀⠐⣤⣶⣶⡤⢤⣤\n                          ⣤⣰⣶⣾⣿⣿⣿⣆⠀⣀⣀⡀⣀⡀\n                          ⠉⠉⠀⢀⢀⣀⠀⣀⣈⡿⠿⠿⠽⠃\n                        ⠛⠛⠿⠿⠿⠿⠾⠟⢁⣀⡴⣦⠆\n                      ⢦⣤⣀⣀⠀⠀⠀⠀⢘⣿⣍⡷⠆\n                   ⢶⣄⠈⠉⠛⠛⠿⠓⠀⠉⠋⠉⣀\n                 ⣧⡀⠙⠻⢶⣶⡤⠀⠀⠛⠶⠾⠼⠋\n              ⣆⠈⠻⣶⣤⡀⠀⠀⢸⠿⣶⣦⣤⣠⣾\n           ⢠⠙⢷⣤⣀⠈⠁⠀⠀⢠⣤⣀⠈⠉⠈\n           ⡌⢧⣀⠉⠛⠃⠀⠀⠀⠀⠉⠛⠿⠿⠻⠃\n         ⠰⢳⣄⠙⠛⢋⠁⠀⠀  ⠘⠿⣴⣤⣄⣤⡄\n          ⣄⡙⠛⠋⠀⠀⠀⠀  ⠰⣤⣀⠉⠉⠉\n        ⢀⢠⡈⠉⠉⠀⠀⠀⠀⠀ ⢀⡈⠙⠛⠛⠛⠁\n       ⠈⢦⡉⠛⡁⠀⠀  ⠀   ⠈⠻⠷⣶⣦⡆\n      ⡈⢷⣌⠙⠛⠁ ⠀ ⠀⠀   ⠰⣦⣄⣀⣀⡀\n    ⠈⢷⣄⡉⠛⠛⠀⠀  ⠀⠀⠀   ⢀⠈⠙⠛⠛\n    ⢦⣀⠉⠛⠷⠖⠀⠀⠀⠀⠀⠀    ⠘⠿⣶⣦⡄\n  ⣠⣀⠙⠳⠶⠶⠀⠀⠀⠀⠀⠀⠀⠀    ⢠⣀⣀⣀\n  ⠙⠻⢿⣶⣤⣤⠀⠀⠀⠀⠀⠀     ⢠⠛⠛⠻⠿\n ⣦⣄⠈⠉⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠈\n⢹⣿⣿⣶⡆⠀⠀⠀⠀⠀⠀⠀          ⠺⠿⠿⠿⠁\n⠙⠻⠟⠁⠀⠀⠀⠀⠀              ⢀⣤⣤⣤⣤⡄\n                                         ⠈⣀⣀⣀⣀⠁")
  }
  if(message.content === "!fumo") {
    message.channel.send("⠀⠀⡜⠁⠀⠈⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠷⠶⠱⡄ \n⠀⢸⣸⣿⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠫⢀⣖⡃⢀⣸⢹ \n⠀⡇⣿⣿⣶⣤⡀⠀⠀⠙⢆⠀⠀⠀⠀⠀⣠⡪⢀⣤⣾⣿⣿⣿⣿⣸\n⠀⡇⠛⠛⠛⢿⣿⣷⣦⣀⠀⣳⣄⠀⢠⣾⠇⣠⣾⣿⣿⣿⣿⣿⣿⣽ \n⠀⠯⣠⣠⣤⣤⣤⣭⣭⡽⠿⠾⠞⠛⠷⠧⣾⣿⣿⣯⣿⡛⣽⣿⡿⡼\n⠀⡇⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣮⡛⢿⠃\n⠀⠀⢸⠁⠀⠀⢠⣏⣨⣉⡃⠀⠀⠀⢀⣜⡉⢉⣇⠀⠀⠀⢹⡄⠀\n⠀⠀⡾⠄⠀⠀⢸⣾⢏⡍⡏⠑⠆⠀⢿⣻⣿⣿⣿⠀⠀⢰⠈⡇⠀\n⠀⢰⢇⢀⣆⠀⢸⠙⠾⠽⠃⠀⠀⠀⠘⠿⡿⠟⢹⠀⢀⡎⠀⡇⠀⠀\n⠀⠘⢺⣻⡺⣦⣫⡀⠀⠀⠀⣄⣀⣀⠀⠀⠀⠀⢜⣠⣾⡙⣆⡇⠀⠀\n⠀⠀⠀⠙⢿⡿⡝⠿⢧⡢⣠⣤⣍⣀⣤⡄⢀⣞⣿⡿⣻⣿⠞⠀⠀⠀\n⠀⠀⠀⢠⠏⠄⠐⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠳⢤⣉⢳⠀⠀⠀\n⢀⡠⠖⠉⠀⠀⣠⠇⣿⡿⣿⡿⢹⣿⣿⣿⣿⣧⣠⡀⠀⠈⠉⢢⡀⠀\n⢿⠀⠀⣠⠴⣋⡤⠚⠛⠛⠛⠛⠛⠛⠛⠛⠙⠛⠛⢿⣦⣄⠀⢈⡇⠀\n⠈⢓⣤⣵⣾⠁⣀⣀⠤⣤⣀⠀⠀⠀⠀⢀⡤⠶⠤⢌⡹⠿⠷⠻⢤⡀\n⢰⠋⠈⠉⠘⠋⠁⠀⠀⠈⠙⠳⢄⣀⡴⠉⠀⠀⠀⠀⠙⠂⠀⠀⢀⡇\n⠀⠑⠸⢿⠀⠀⠀⠀⢈⡗⠭⣖⡒⠒⢊⣱⠀⠀⠀⠀⢨⠟⠂⠚⠋⠀\n⠀⠀⠀⠘⠦⣄⣀⣠⠞⠀⠀⠀⠈⠉⠉⠀⠳⠤⠤⡤⠞⠀⠀")
  }
  if(message.content === "!nether") {
    message.channel.send("<:obsidian:1131951814854578197><:obsidian:1131951814854578197><:obsidian:1131951814854578197><:obsidian:1131951814854578197>\n<:obsidian:1131951814854578197><a:netherportalanim:1131950010708279417><a:netherportalanim:1131950010708279417><:obsidian:1131951814854578197>\n<:obsidian:1131951814854578197><a:netherportalanim:1131950010708279417><a:netherportalanim:1131950010708279417><:obsidian:1131951814854578197>\n<:obsidian:1131951814854578197><a:netherportalanim:1131950010708279417><a:netherportalanim:1131950010708279417><:obsidian:1131951814854578197>\n<:obsidian:1131951814854578197><:obsidian:1131951814854578197><:obsidian:1131951814854578197><:obsidian:1131951814854578197>")
  }
})




//EMBEDS (...? theres none for now)

//TriggerWords
const WomenWords = ["woman", "women", "Woman", "Women", "WOMAN", "WOMEN"]
const UwUWords = ["UwU", "OwO", "owo", "uwu"]
const DrugWords = ["coca", "cocaina", "canabis", "LSD", "lsd", "COCA", "COCAINA", "CANABIS", "drogas", "DRUGS", "drugs", "DROGAS", "marijuana", "MARIJUANA", "crack", "pó branco", "pozinho branco"]
const FBI_OPEN_UP = ["Fbi", "FBI", "fbi"]
const WindowsWords = ["windows 10", "windows 11", "Windows 10", "Windows 11", "WINDOWS 10", "WINDOWS 11"]
const UnsaidWords = ["me when", "Me when", "Me When", "me When", "ME WHEN"]
const SaidWords = ["Eu quando", "EU QUANDO", "eu quando", "eU quando", "Eu Quando"]
const Ambar = ["Ambar", "ambar", "AMBAR", "<@846074657240645653>"]
const ratiOWOrds = ["ratio", "RATIO", "bozo", "BOZO", "don’t care", "DONT CARE", "dont care", "Don't care", "Dont care", "didn’t ask", "DIDNT ASK", "didnt ask", "DIDN'T ASK", " L ", " kys", " KYS", "cry about it", "cry abt it", "CRY ABOUT IT", "get real", "GET REAL", "who asked", "WHO ASKED", "cope", "COPE", "Cope", "!ratio"]
const CatWords = ["this is cat is", "THIS CAT IS", "This Cat Is", "this cat is", "!cat", "This cat is"]
const AchoWords = ["Acho", "acho", "ACHO"]
const IThinkWords = ["I think", "i think", "I THINK"]
const IfOnlyWords = ["If only", "IF ONLY", "ifonly", "if only", "IFONLY", "IfOnly"]
const RuiWords = ["rui", "RUI", "Rui", "rUI", "RuI", "<@584137309423796224>", "ruI", "rUi", "RUi", "<@1129103654000013383>"]
const RobloxArgumentWords = ["ClientSided", "Tactical_Neko", "RobloxArgument", "RobloxDrama", "argument", "Argument", "ARGUMENT", "aRGUMENT"]
const SexUpdate2023 = ["!sex"]
const BreakPointTrigger = ["Breaking Point", "BREAKING POINT", "breaking point", "breaking Point", "Breaking point", "breaking POINT", "BREAKING point"]
const FrenchPersonTrigger = ["hon hon hon", "French", "Hon Hon Hon", "french", "français", "Français", "FRancês", "Francês", "francês", "FRENCH", "HON HON HON", "FRANÇAIS", "FRANCÊS", "Francez", "francez", "FRANCEZ", "frances", "FRANCES", "Frances", "Hon hon hon"]
const HivemindTrigger = ["hivemind", "Hivemind", "HIVEMIND", "hIVEMIND", "Breaking Point", "BREAKING POINT", "breaking point", "breaking Point", "Breaking point", "breaking POINT", "BREAKING point"]
const SeaFoodTrigger = ["sea", "Sea", "SEA","marisco", "Marisco", "Mariscada", "mariscada", "shrimp", "Shrimp", "Camarão", "gruel", "krill", "Krill", "seapun", "cray", "Cray", "Lagosta", "Lagostim", "lagostim", "lagosta", "CRAY", "LAGOSTA", "LAGOSTIM", "CAMARÃO", "CRAB", "crab", "Crab", "MARISCO", "MARISCADA", "KRILL", "SHRIMP"]
const SquidTrigger = ["squid", "SQUID", "Squid", "geso"]

//TriggerRandom
const FBI_CLOSE_UP = ["Can't have shit in Detroit.", "HOW DID THEY FIND ME", "Gotta find a lawyer, I guess.", "ONDE?!", "Officer I can explain", "She's 16, almost 17, which is basically 18."]

const UnsaidGIFS = ["https://cdn.discordapp.com/attachments/866738433421344789/997510827345195070/unknown.gif", "https://tenor.com/view/me-when-fat-man-when-the-gif-22060334", "https://tenor.com/view/3d-saul-saul-goodman-adamghik-gif-23876766", "https://tenor.com/view/me-when-the-when-the-beamng-gif-22226593", "https://tenor.com/view/hoi4-paradox-eu4-ck3-ck2-gif-23373729", "https://tenor.com/view/walter-faint-when-the-me-gif-22116523", "https://tenor.com/view/pog-dog-heart-locket-me-when-the-gif-24920086", "https://tenor.com/view/me-when-the-gif-19084226", "https://tenor.com/view/when-the-me-sonic-me-when-the-gif-19555618", "https://tenor.com/view/me-when-me-whe-the-when-the-me-when-me-when-the-me-me-the-when-me-the-me-the-when-gif-21875472", "https://tenor.com/view/me-when-the-markiplier-is-that-the-bite-of87-gif-19770814", "https://tenor.com/view/me-when-the-meme-explaining-gif-25104447", "https://tenor.com/view/when-the-gif-19615076", "https://tenor.com/view/me-when-the-when-the-meme-dance-run-gif-17755762", "https://tenor.com/view/me-when-black-me-when-the-meme-funny-gif-24554095", "https://tenor.com/view/me-when-gif-22421002"]

const SaidGIFS = ["https://cdn.discordapp.com/attachments/866738433421344789/1004732651208441978/unknown.png", "https://cdn.discordapp.com/attachments/866738433421344789/1004732651493662750/VID-20220731-WA0001.mp4", "https://tenor.com/view/portugal-gif-25623708", "https://tenor.com/view/portugal-gif-22788330", "https://tenor.com/view/danny-house-meme-help-portugal-portugalyippee-gif-25266502", "https://tenor.com/view/portugal-homem-homem-portugal-average-portuguese-male-gif-17330854", "https://tenor.com/view/portugal-portuguese-portugese-furga-danny-house-gif-24111565", "https://cdn.discordapp.com/attachments/995331136903458938/1004815414641049630/PT2.mp4", "https://cdn.discordapp.com/attachments/995410565314924554/1004821037843755098/PT_slander.mp4", "https://cdn.discordapp.com/attachments/995331136903458938/1004862869839544360/sus.png", "https://tenor.com/view/ab%C3%B3bora-com-leite-ab%C3%B3bora-eu-quando-gif-22387094", "https://cdn.discordapp.com/attachments/995410565314924554/1008478123899244614/1v1.mp4", "https://cdn.discordapp.com/attachments/995410565314924554/1011371090389520516/Screenshot_20220821-155934_YouTube.jpg", "https://cdn.discordapp.com/attachments/995331136903458938/1276216382123675728/image4.png?ex=66c8b8a0&is=66c76720&hm=3fb3c6db399fbed1e90dab5a1abe3c0ec7746dda7ba6d5e81ebd15d93fb0a5dc&", "https://cdn.discordapp.com/attachments/995331136903458938/1276216382593306644/Captura_de_ecra_2022-05-22_162431_1.jpg?ex=66c8b8a0&is=66c76720&hm=64e3f3879e906596c1f00afe8b41a31bf0cb9d0cfdaa1f6a718234a3fbba8ab8&", "https://cdn.discordapp.com/attachments/995331136903458938/1276216383138697259/Fcuz9FZWQAUTZvO.jpg?ex=66c8b8a0&is=66c76720&hm=a57ef833ecf3880409ea55737d6657e6ed62b48afb6e09cc05065b6ae09c1db0&", "https://cdn.discordapp.com/attachments/995331136903458938/1277628805271261255/pwagq0trzvjd1.png?ex=66cddc0c&is=66cc8a8c&hm=4f269b3c791b4a822e6819a6730ab4ba90fb0e1063bce5884ec6e9ca23136a34&", "https://cdn.discordapp.com/attachments/995331136903458938/1277625210484555902/FsQlCPQWIAAoB_R.png?ex=66cdd8b3&is=66cc8733&hm=3df46e4054277be782212089e754959d078d8ef1d555df4b7edb9973f6c8b99f&", "https://cdn.discordapp.com/attachments/995331136903458938/1277625465003311134/RDT_20240221_205629.mp4?ex=66cdd8ef&is=66cc876f&hm=72b3ca92b8d8c3555c89ef1168567b7515089b6deb992b84e09fc20baed4721c&"]

const CatGIFS = ["https://tenor.com/view/kitty-review-cute-kitty-funny-cat-cat-review-gif-21188467", "https://tenor.com/view/this-is-cat-is-d-fall-cute-pet-gif-16272929", "https://tenor.com/view/cat-this-cat-is-post-this-cat-cat-flying-gif-25220367", "https://tenor.com/view/cat-this-cat-this-cat-is-f-funny-gif-funny-cat-gif-22143255", "https://tenor.com/view/this-cat-this-cat-is-this-is-this-cat-is-r-this-gif-16319547", "https://tenor.com/view/this-cat-is%C3%B8-swagmaster89original-gif-24386349", "https://tenor.com/view/this-cat-is-cr-gif-25403373", "https://tenor.com/view/omori-mewo-cat-this-cat-is-r-gif-25290143", "https://tenor.com/view/kitty-review-gif-26082295", "https://tenor.com/view/everybody-wants-to-be-my-enemy-gif-25254672", "https://tenor.com/view/kitty-review-kitty-cat-meme-funny-gif-20978803", "https://tenor.com/view/kitty-review-cat-insane-gif-21576551", "https://tenor.com/view/kitty-review-ugly-bingus-kitty-gif-21504000", "https://tenor.com/view/kitty-review-cat-kitty-review-gif-20973774", "https://tenor.com/view/kitty-review-cat-gamer-cat-pro-gamer-gif-21395567", "https://tenor.com/view/what-the-dog-doing-this-cat-just-j-blocked-gif-21619262", "https://tenor.com/view/cat-funny-this-cat-just-j-gif-20559236"]

const IfOnlyGIFS = ["https://tenor.com/view/mercy-alcohol-gif-24056926", "https://tenor.com/view/kids-getting-run-over-meme-ad-kids-run-over-gif-22566267", "https://tenor.com/view/dating-gif-26388733", "https://tenor.com/view/ip-twitter-gif-26177251", "https://tenor.com/view/ao-oni-knife-if-only-i-had-a-knife-funny-jazzycars-gif-21089063"]

const RUI_BALLS = ["I need balls", "I NEED BALLS", "https://tenor.com/view/kamishiro-rui-rui-kamishiro-this-is-a-joke-project-sekai-puroseka-gif-25353578", "Paraplégico que anda", "Ho porra tirem a porra da lã", "Quero ser um cão au au", "hastag itália", "isto aqui é o vietnam, vamos bora *dies*", "chava lor tardado", "im a builder", "Hit me hit me now you gotta kiss me"]

const ArgumentoCLOSE_UP = ["shut the hell up and jump off a building or smth", "this dumb overconfident anime girl with no right or point to live on this planet wont stop bothering this guy that just wants to chill", "im gonna find this annoying overconfident fatherless loser with no point in life but to exist just for the worst of things to happen to her child", "i have to either 1v1 them or see them leave", "ur dad ran from you", "you probably function like a machine, being used over and over again and now it created you, some random woman that roams around in games where people are mostly chill and randomly start arguments bec"]

const AprilFools2023 = ["https://media.discordapp.net/attachments/497142796961054721/1024064368377335851/attachment-8.gif", "https://tenor.com/view/%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-speech-bubble-gif-25663959", "https://tenor.com/view/smadging-speech-bubble-speech-bubble-smadging-gif-26061412", "https://tenor.com/view/speechbubble-speech-bubble-please-meme-gif-25693113", "https://tenor.com/view/volatil3-speech-bubble-gif-26229503", "https://tenor.com/view/lego-island-brickster-discord-speech-bubble-gif-25986049", "https://tenor.com/view/speech-bubble-gif-25352052", "https://tenor.com/view/cat-typing-speech-bubble-kitty-gif-25862715", "https://tenor.com/view/speech-bubble-gif-25768562", "https://tenor.com/view/ishowspeed-speech-bubble-gif-25561001"]

const BreakPointQuotes = ["the food is being microwaved \n peep-peep-peep", "YE \n RACIST \n ALWAYS", "not bueno \n \n yes bueno", "death by radiation \n i didn't even choose you", "this is going to my chernobyl compilation", "microwave", "radiation man", "radioactive man why you give me cancer? \n its my favorite food"]

const Hivemind = ["the hivemind cooks", "the hivemind leaves", "the hivemind appretiates you", "the hivemind does not cook for outsiders", "the hivemind says probably", "the hivemind forgives", "the hivemind works", "the hivemind avenges", "the hivemind is amused", "the hivemind is scared", "the hivemind is not confident", "the hivemind does not want to comment", "the hivemind knows all", "the hivemind knows it", "the hivemind did not ask", "the hivemind has not decided", "the hivemind has short memory", "the hivemind did not ask", "the hivemind did not ask", "the hivemind did not ask", "the hivemind did not ask"]

const FrenchMenQuotes = ["Hon Hon Hon, je suis frances, je non mereçe direitos"]

const SeaFoodThings = ["https://tenor.com/view/lefishe-stfu-cresid-fish-walking-fish-gif-21773581", "https://tenor.com/view/mememans-gif-funny-fish-eating-fish-gif-20126825", "https://tenor.com/view/simple-shrimple-shrimple-meme-its-really-that-shrimple-shrimple-gif-gif-26259870", "https://tenor.com/view/meme-fish-wwe-gif-26228895", "https://tenor.com/view/fish-effishient-its-very-spinning-fish-gif-26223614", "https://tenor.com/view/its-kinda-conchfusing-conchfusing-its-as-shrimple-as-that-shrimple-its-actually-very-clampicated-gif-26109078", "https://tenor.com/view/grueling-grueeling-clamplicated-shrimple-gif-26210349", "https://tenor.com/view/benefishial-beneficial-shrimple-grouper-clamplicated-gif-26440220", "https://tenor.com/view/its-as-shrimple-as-that-shrimple-clam-grass-jump-gif-25956447", "https://tenor.com/view/shrimp-simple-its-shrimple-gif-25735431", "https://tenor.com/view/krill-issue-skill-issue-krill-issue-gif-25572478", "https://tenor.com/view/shrimp-its-as-shrimple-as-that-not-so-shrimple-elden-ring-elden-ring-meme-gif-26027466", "https://tenor.com/view/youve-got-to-be-squidding-me-its-as-shrimple-as-that-shrimple-squid-gif-26786461", "https://tenor.com/view/your-octopinion-is-invalid-its-as-shrimple-as-that-i-cant-believe-you-would-becray-me-gif-26284138", "https://tenor.com/view/squid-clear-myself-gif-meme-gif-25725527", "https://tenor.com/view/shrimple-pun-puns-sea-puns-shark-my-words-gif-27141528", "https://tenor.com/view/its-simply-resharkable-your-octopinion-is-invalid-its-as-shrimple-as-that-gif-26284133", "https://tenor.com/view/its-as-shrimple-as-that-shrimple-simply-mantastic-mantastic-manta-ray-gif-26542779", "https://tenor.com/view/immorayl-immoral-shrimple-moray-gif-26441026", "https://tenor.com/view/your-octopinion-is-invalid-its-as-shrimple-as-that-its-kind-of-conchfusing-actually-its-very-clampicated-gif-26280918", "https://tenor.com/view/that-is-ferry-difficult-to-understand-ferry-shrimple-its-as-shrimple-as-that-gif-26823230", "https://tenor.com/view/simple-shrimple-shrimple-gif-its-really-that-shrimple-not-so-shrimple-now-gif-26259869", "https://tenor.com/view/krill-goodbye-krill-goodbye-krill-world-suicide-lober-gif-26900795", "https://tenor.com/view/shrimple-as-that-shrimp-suicide-shrimp-shrimp-le-gif-3057113260894778748", "https://tenor.com/view/sunfish-mola-mola-shrimple-suncanny-uncanny-gif-27169147", "https://tenor.com/view/fishy-clampicated-its-as-shrimple-as-that-gif-26644888", "https://tenor.com/view/shrimp-you-think-shrimple-shrimpler-than-you-think-gif-5912339516632023992", "https://tenor.com/view/i-am-reely-excited-reely-excited-its-as-shrimple-as-that-shrimple-gif-27077225", "https://tenor.com/view/shrimple-sponge-its-as-shrimple-as-that-gif-27169116", "https://tenor.com/view/shrimple-crab-pun-gif-26367251", "https://tenor.com/view/wrasse-pun-sea-sea-pun-fish-gif-15576404855079711493", "https://tenor.com/view/shrimple-sea-puns-crabout-time-gif-27141533", "https://tenor.com/view/shrimple-puns-sea-puns-crabsolutely-gif-27141532", "https://tenor.com/view/shrimple-its-as-shrimple-as-that-what-a-load-of-carp-carp-crap-gif-16611986643013439035", "https://tenor.com/view/lobster-shellfish-pun-crab-clampicated-gif-26205880", "https://tenor.com/view/outraygeous-shrimple-outrageous-eagle-ray-gif-27253586", "https://tenor.com/view/nautlius-its-naught-about-that-naught-not-so-shrimple-now-its-as-shrimple-as-that-gif-26733291", "https://tenor.com/view/shrimple-fish-fish-pun-sea-pun-sea-gif-9507824056872458688", "https://tenor.com/view/its-not-something-you-cod-achieve-easily-cod-shrimple-fish-gif-26573464", "https://tenor.com/view/shrimple-fish-meme-ambfishous-its-as-shrimple-as-that-gif-26319782", "https://tenor.com/view/a-sardine-grows-from-the-soil-vocaloid-utau-%E3%82%A4%E3%83%AF%E3%82%B7%E3%81%8C%E3%81%A4%E3%81%A1%E3%81%8B%E3%82%89%E3%81%AF%E3%81%88%E3%81%A6%E3%81%8F%E3%82%8B%E3%82%93%E3%81%A0-gif-25035120"]

const SquidMoment = ["de geso", "https://tenor.com/view/youve-got-to-be-squidding-me-its-as-shrimple-as-that-shrimple-squid-gif-26786461", "DE GESO", "you've got to be squidding me", "https://tenor.com/view/my-honest-reaction-squid-girl-ika-musume-degeso-giant-shrimp-gif-27258246", "https://tenor.com/view/squid-girl-ika-musume-alerted-gif-15389715825872663717"]

const KasaneTeto = ["https://tenor.com/view/teto-kasane-kasane-teto-vocaloid-drink-gif-24780201"]

//TriggerHours (non functional)
const AmbarQuotes = ["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "cringe", "lmao quem é esse", "do not disturb the lord", "hm....", "Sim ? oh espera...", "ayo ?", "AmbarFox got revenge on Enderman", "stop annoying him", "get real", "kisses", "feeble", "the feeble wiggle"]

//TriggerMessages
client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

  WomenWords.forEach((word) => {
    if (message.content.includes(word)) {
      message.channel.send("Woman!?!\nWhere ?")
    }
  })
  AchoWords.forEach((word) => {
    if (message.content.includes(word)) {
      message.channel.send("Keyword is acho")
    }
  })
  IThinkWords.forEach((word) => {
    if (message.content.includes(word)) {
      message.channel.send('Keywords are "I think"')
    }
  })
  DrugWords.forEach((word) => {
    if (message.content.includes(word)) {
      message.channel.send("ONDE !???!? *sniff*")
    }
  })
  WindowsWords.forEach((word) => {
    if (message.content.includes(word)) {
      message.channel.send("GUYS DID YOU KNOW YOU CAN ACTUALLY INSTALL WINDOWS 9 ? I INSTALLED WINDOWS 9 AT 3 AM WHEN I PHONED MACDONALDS CUSTOMER SERVICE (REAL !!!1!) NOT CLICKBAIT  POLICE CALLED GONE WRONG GONE SEXUAL !!!!")
    }
  })
  FBI_OPEN_UP.forEach((word) => {
    const randomFBI = FBI_CLOSE_UP[Math.floor(Math.random() * FBI_CLOSE_UP.length)]
    if (message.content.includes(word)) {
      message.channel.send(randomFBI)
    }
  })
  UnsaidWords.forEach((word) => {
    const randomAssGif = UnsaidGIFS[Math.floor(Math.random() * UnsaidGIFS.length)]
    if (message.content.includes(word)) {
      message.channel.send(randomAssGif)
    }
  })
  SaidWords.forEach((word) => {
    const randomFGif = SaidGIFS[Math.floor(Math.random() * SaidGIFS.length)]
    if (message.content.includes(word)) {
      message.channel.send(randomFGif)
    }
  })
  Ambar.forEach((word) => {
    const randomAAAAAAAAA = AmbarQuotes[Math.floor(Math.random() * AmbarQuotes.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(randomAAAAAAAAA)
    }
  })
  CatWords.forEach((word) => {
    const thiscatisr = CatGIFS[Math.floor(Math.random() * CatGIFS.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(thiscatisr)
    }
  })
  IfOnlyWords.forEach((word) => {
  const ifonly = IfOnlyGIFS[Math.floor(Math.random() * IfOnlyGIFS.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(ifonly)
    }
  })
  RuiWords.forEach((word) => {
    const ruiballs = RUI_BALLS[Math.floor(Math.random() * RUI_BALLS.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(ruiballs)
    }
  })
  RobloxArgumentWords.forEach((word) => {
    const Argumentwording = ArgumentoCLOSE_UP[Math.floor(Math.random() * ArgumentoCLOSE_UP.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(Argumentwording)
    }
  })
  SexUpdate2023.forEach((word) => {
    const sexupdating = AprilFools2023[Math.floor(Math.random() * AprilFools2023.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(sexupdating)
    }
  })
  BreakPointTrigger.forEach((word) => {
    const breakingthepoint = BreakPointQuotes[Math.floor(Math.random() * BreakPointQuotes.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(breakingthepoint)
    }
  })
  FrenchPersonTrigger.forEach((word) => {
    const frenchpersonthing = FrenchMenQuotes[Math.floor(Math.random() * FrenchMenQuotes.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(frenchpersonthing)
    }
  })
  HivemindTrigger.forEach((word) => {
    const hivemindlore = Hivemind[Math.floor(Math.random() * Hivemind.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(hivemindlore)
    }
  })
  SeaFoodTrigger.forEach((word) => {
    const seafood = SeaFoodThings[Math.floor(Math.random() * SeaFoodThings.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(seafood)
    }
  })
    SquidTrigger.forEach((word) => {
    const geso = SquidMoment[Math.floor(Math.random() * SquidMoment.length)]
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      message.channel.send(geso)
    }
  })
  ratiOWOrds.forEach((word) => {
    if (message.content.includes(word)) {
      message.channel.send("don’t care + didn’t ask + cry about it + who asked + stay mad + get real + L + bleed + mald seethe cope harder + dilate + incorrect + hoes mad + pound sand + basic skill issue + typo + ratio + ur dad left + you fell off + no u + the audacity + triggered + repelled + ur a minor + k. + any askers + get a life + ok and? + cringe + copium + go outside + touch grass + you eat glue + quote tweet + think again + not based + not funny didn’t laugh + You should kys + get good + reported + ad hominem + ok boomer + small p + get sunlight ffs + bad opinion + get rekt + trolled + your loss + muted + banned + kicked + permaban + useless + i slept with ur mom + yo momma + yo dad not real + clown + no bitches allowed + i said it better + tiktok fan + get a life + unfollowed + you're unlovable + redditor + stfu + simp + learn how to type + talk nonsense + trump supporter + your’re a full time discord mod + you’re* + grammar issue + nerd + get clapped + kys + lorem ipsum dolor sit amet + go outside + bleach + lol + gay + retard + autistic + reported + ask deez + ez clap + straight trash + idgaf + ratio again + stay mad + read FAQ + you lost + you dumbass + stay pressed + reverse double take back + pedophile + cancelled + done for + don't give a damn + get a job + sus + baka + sussy baka + get blocked + mad free + freer than air + furry + rip bozo + I bet you like France + slight_smile + aired + cringe again + porn addict + mad cuz bad + your pronouns are: wrong, irrelevant and looser + you suck dick + deal with it + screenshoted your post + karen + jealous + you're deaf + balls + just die + go ahead and cry about it + not straight + eat paper + you lose + count to three + your problem + no one cares + log off + don't care even more + sex offender + sex defender + atheist + not okay + hys + NFT owner + you make bad memes + problematic + fall in line + dog water + you look stupid + you don’t know 2 + 2 is + RaNdOm Is FuNnY + shut + I feel bad for your mom + Final Ratio idiot")
    }
  })
})

//CMD_Words
const MyselfRandom = [" committed not alive.", " committed aliven't.", " committed 'if' stacking.", " died.", " decided to stop breathing.", " didnt call the suicide prevention hotline."]
const MyselfGifsRandom = [""]
const WidnowsNeinRandom = ["404 not responding", "lmao its not that easy", "NOOOOOOOOOOOOO, I've been defeated", "Auto-Destruction Mode Activating, nuking this server in 3 - 2 - 1..."]
const KillRandom = [" successfully killed", " successfully trolled", " obliterated", " eliminated", " deleted", " is dominating", " stickbugged", " murdered"]
const KillGifsRandom = ["https://tenor.com/view/murder-spongebob-rainbow-gif-15431155", "https://tenor.com/view/cry-gif-23674110", "https://tenor.com/view/murder-meme-death-goose-duck-gif-19928127", "https://tenor.com/view/point-gun-shoot-bang-bang-crying-scared-gif-15272562", "https://tenor.com/view/murderer-pillow-gif-25218991", "https://tenor.com/view/kill-gif-19521148", "https://tenor.com/view/1st-degree-murder-omori-aubrey-omori-omori-ecstatic-murder-gif-24163762", "https://tenor.com/view/we-do-a-little-trolling-gif-26181596", "https://tenor.com/view/trolling-smash-death-obliteration-help-gif-20897375", "https://tenor.com/view/we-do-a-little-trolling-tf2-tomfoolery-verbose-gif-21064738", "https://tenor.com/view/trolling-smash-death-obliteration-help-gif-20897375", "https://tenor.com/view/pokeslam-slam-gif-18269254", "https://tenor.com/view/anime-keyboard-delete-you-was-deleted-gif-17895303", "https://tenor.com/view/tyler1-gif-20672032", "https://tenor.com/view/natural-causes-natural-causes-dantist-gif-26229749", "https://c.tenor.com/xhya5u285LkAAAAM/kill-monster.gif"]
const KredasWords = ["You're not him", "Kredas wannabe", "Bro think they Kredas 💀", "https://cdn.discordapp.com/attachments/995329036039491646/1274363713293520947/petpet.gif?ex=66c892b1&is=66c74131&hm=f36a0b701350b90d2f8590d2057f02ebd54474c4522999238fc575dc4c82cbfc&"]

//CMDS  (!diz , )
client.on("messageCreate", message => {
      if(message.content.startsWith("/testeprofilebotaolmaoxd")) {
    if (message.author.bot) return false;
           message.channel.send("não liguem a isto")
      }
    if(message.content.startsWith("!bio")) {
    if (message.author.bot) return false;
      const replacementos = {"!bio": " ",
                            " ": "..."};
      const pattern = new RegExp(Object.keys(replacementos).join('|'), 'g');
      const replacedText = message.content.replace(pattern, key => replacementos[key]);
           message.channel.send(replacedText)
      }
   if(message.content.startsWith("!diz")) {
    if (message.author.bot) return false;
    let messageContent = message.content.replace("!diz", "")
     message.channel.send(messageContent)
      }
   if(message.content.startsWith("!swear")) {
    if (message.author.bot) return false;
    let messageContent = message.content.replace("!swear", "I swear people who put '...' at the end of their sentences")
     message.channel.send(messageContent)
      }
   if(message.content.startsWith("!roll ")) {
    if (message.author.bot) return false;
    let messageContent = message.content.replace("!roll ", "")
     numbah = getRandomInt(messageContent)
     numbah = (numbah + 1)
     numbahh = numbah.toString()
     message.channel.send(numbahh)
      }
   if(message.content.startsWith("!gamble ")) {
    if (message.author.bot) return false 
    messageContent = message.content.replace("!gamble ", "")
    if (messageContent === "0") {
       if (message.author.id == "1004855837161951313") {
        message.channel.send("The king has won")
       } else {
        const damnnnn = KredasWords[Math.floor(Math.random() * KredasWords.length)]
        message.channel.send(damnnnn) 
       }
     } else {
        numbahhh = getRandomInt(messageContent) + 1
        numbahhhh = numbahhh.toString()
        message.channel.send(numbahhhh)
        if (messageContent == numbahhhh)
          message.channel.send("Won the lottery !!!!!!!!")
        else
           message.channel.send("Aw dang it !")
           }
         }
    
       
   if(message.content.startsWith("!kill")) {
    const KillDialogue = KillRandom[Math.floor(Math.random() * KillRandom.length)]
    const KillGifs = KillGifsRandom[Math.floor(Math.random() * KillGifsRandom.length)]
    const MyselfDialogue = MyselfRandom[Math.floor(Math.random() * MyselfRandom.length)]
    const WindowsDialogue = WidnowsNeinRandom[Math.floor(Math.random() * WidnowsNeinRandom.length)]
     let CheckContent = message.content.replace("!kill", "")
     let messageContent = message.content.replace("!kill", message.author.username + KillDialogue)
    if(CheckContent == " Myself" || CheckContent == " myself" || CheckContent == " MYSELF") {
      message.channel.send(message.author.username + MyselfDialogue)
     } else if(CheckContent == " WRINDOWS_9" || CheckContent == " Wrindows_9" || CheckContent == " wrindows_9") {
      message.channel.send(WindowsDialogue)
     } else if(CheckContent != " Myself" || CheckContent != " myself" || CheckContent != " MYSELF" || CheckContent != " WRINDOWS_9" || CheckContent != " Wrindows_9" || CheckContent != " wrindows_9") {
      message.channel.send(messageContent)
      message.channel.send(KillGifs)
    }
   }
})

//activ shenanigans
const startupmessages = ["with depression", "amogus", "with balls", "KILLKILLKILLKILL", "with windows 10", "miceraft", "a delicate game of chess", "with words", "with ur feelings", "along with u", "HIDE N SEEK BITCH", "with yo mom", "funny dream game", "fbi is spying on u", "REPLIT DOT COM", "famousphobia", "startupmessages", "engineer", "cable management", "minecraft modpacks", "discord 2", "Tinky - unfortunaly no", "with dementia", "divorce sim", "funny winter game", "*stalking", "walter, put your", "I AM THE ONE WHO HEARS", "I got ur ip", "kys", "waterlemon eating", "wrindows_9", "touhou", "YATTA", "rui simulator", "index.js", "README", "discord.js v69", "without motivation", "dw", "dementia", "dementia", "dementia", "OFF", "shut the fuck up, Im balling", "Currently playing:", "Playing", "boblox", "an awful of game of checkers", "Hit error code 429", "/dinsi", "reimu gaming", "miku gaming", "cirno gaming", "rythme gaymes", "cardiac arrest", "amercia sim", "capitalism", "flashii chat addiction desu yo", "YOU ARE PLAYING MINECRAFT", "looking for diamonds", "Balls like jupiter", "is he trolling ?", "Im normal", "Error code 418: im a teapot", "de geso", "very shrimple", "Im just squidding", "ding", "yummy nickels", "Hello everynyan", "I wish I were a bird", "oh mah gah", "what the bruh", "squid"]
const randomstartup = startupmessages[Math.floor(Math.random() * startupmessages.length)]
const watchupmessages = ["over", "you", "twicth", "every single of ur moves", "ur house"]

const StartupCMD = ["!status"]
const WatchCMD = ["!watchst"]
const StreamCMD = ["!streamst"]

client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

  StartupCMD.forEach((word) => {
    if (message.content.includes(word)) {
    const betterrandomstartup = startupmessages[Math.floor(Math.random() * startupmessages.length)]
    client.user.setActivity(betterrandomstartup)
    console.log(betterrandomstartup)
    message.channel.send("Currently playing:")
    message.channel.send(betterrandomstartup)
    }
  })
  WatchCMD.forEach((word) => {
    if (message.content.includes(word)) {
    const randomwatchup = watchupmessages[Math.floor(Math.random() * watchupmessages.length)]
    client.user.setActivity({name: randomwatchup , type: 'WATCHING'})
    console.log(randomwatchup)
    message.channel.send("Currently watching:")
    message.channel.send(randomwatchup)
    }
  })
})

//twitter conv
const TwitterWords = ["https://x.com/"]
const VeryStupid = ["lazy ass", "fear not, for the bot can fix your ass", "send it like this, is it that hard to do", "stupid"]

client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

    TwitterWords.forEach((word) => {
    if(message.author.bot) return false;
     if (message.content.includes(word)) {
      const sostupid = VeryStupid[Math.floor(Math.random() * VeryStupid.length)]
      message.suppressEmbeds(true)
      actualtw = message.content.replace("https://x.com/", "https://fxtwitter.com/")
      message.channel.send(sostupid + " " + actualtw)
    }
  })
})


//AUTH (If console displays "Hit 429 while executing request", use "kill 1" on shell)
const mySecret = process.env["token"]
client.login(process.env.token)
client.on('debug', console.log);
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(randomstartup)
  console.log(randomstartup)
});