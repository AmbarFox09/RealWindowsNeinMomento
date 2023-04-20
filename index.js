const { get } = require("https");
//checks for 429 errors at startup and every 5 minutes (immortality moment)
function handleRateLimit() {
    get(`https://discord.com/api/v10/gateway`, ({ statusCode }) => {
        if (statusCode == 429) { process.kill(1) }
    });
};
handleRateLimit();
setInterval(handleRateLimit, 3e5); //3e5 = 300000 (3 w/ 5 zeros)

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
  if(message.content === "!deez") {
    message.channel.send("nuts")
  }
  if(message.content === "!deez nuts") {
    message.channel.send("AHHAHAHAH SO FUNNI")
  }
  if(message.content === "Boa noite") {
    message.channel.send("ACORDA PARA A VIDA BOI")
  }
  if(message.content === "!amogus") {
    message.channel.send(".\n                                     ⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀\n                                  ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀\n                              ⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷\n                              ⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠛⠛⠛⠿⠿⣿⣷⣄\n                             ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷\n         ⢀⣠⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀ ⠀⠀⠀ ⠀⠀⠀⠀⠀⢸⣿⣇\n⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣤⣤⣤⣤⣤⣤⣴⣶⣿⣿⡿\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁\n⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿\n ⠙⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n                 ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n                ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃\n                 ⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿\n                  ⢻⣿⣿⣿⡿⣟⣯⣿⠟⡉⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿\n                    ⠻⢿⣽⣿⣿⣿⠿⠿⠟⠒⠉⠉⠉⠉⠉⠉⠉⠙⠋\n                       ⠈⠿⠋⠉⢀⣠⣤⣤⡔⣄\n                          ⣴⠾⠛⠋⠉⠀⢀⣀⠐⣤⣶⣶⡤⢤⣤\n                          ⣤⣰⣶⣾⣿⣿⣿⣆⠀⣀⣀⡀⣀⡀\n                          ⠉⠉⠀⢀⢀⣀⠀⣀⣈⡿⠿⠿⠽⠃\n                        ⠛⠛⠿⠿⠿⠿⠾⠟⢁⣀⡴⣦⠆\n                      ⢦⣤⣀⣀⠀⠀⠀⠀⢘⣿⣍⡷⠆\n                   ⢶⣄⠈⠉⠛⠛⠿⠓⠀⠉⠋⠉⣀\n                 ⣧⡀⠙⠻⢶⣶⡤⠀⠀⠛⠶⠾⠼⠋\n              ⣆⠈⠻⣶⣤⡀⠀⠀⢸⠿⣶⣦⣤⣠⣾\n           ⢠⠙⢷⣤⣀⠈⠁⠀⠀⢠⣤⣀⠈⠉⠈\n           ⡌⢧⣀⠉⠛⠃⠀⠀⠀⠀⠉⠛⠿⠿⠻⠃\n         ⠰⢳⣄⠙⠛⢋⠁⠀⠀  ⠘⠿⣴⣤⣄⣤⡄\n          ⣄⡙⠛⠋⠀⠀⠀⠀  ⠰⣤⣀⠉⠉⠉\n        ⢀⢠⡈⠉⠉⠀⠀⠀⠀⠀ ⢀⡈⠙⠛⠛⠛⠁\n       ⠈⢦⡉⠛⡁⠀⠀  ⠀   ⠈⠻⠷⣶⣦⡆\n      ⡈⢷⣌⠙⠛⠁ ⠀ ⠀⠀   ⠰⣦⣄⣀⣀⡀\n    ⠈⢷⣄⡉⠛⠛⠀⠀  ⠀⠀⠀   ⢀⠈⠙⠛⠛\n    ⢦⣀⠉⠛⠷⠖⠀⠀⠀⠀⠀⠀    ⠘⠿⣶⣦⡄\n  ⣠⣀⠙⠳⠶⠶⠀⠀⠀⠀⠀⠀⠀⠀    ⢠⣀⣀⣀\n  ⠙⠻⢿⣶⣤⣤⠀⠀⠀⠀⠀⠀     ⢠⠛⠛⠻⠿\n ⣦⣄⠈⠉⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠈\n⢹⣿⣿⣶⡆⠀⠀⠀⠀⠀⠀⠀          ⠺⠿⠿⠿⠁\n⠙⠻⠟⠁⠀⠀⠀⠀⠀              ⢀⣤⣤⣤⣤⡄\n                                         ⠈⣀⣀⣀⣀⠁")
  }
  if(message.content === "!fumo") {
    message.channel.send("⠀⠀⡜⠁⠀⠈⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠷⠶⠱⡄ \n⠀⢸⣸⣿⠀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠫⢀⣖⡃⢀⣸⢹ \n⠀⡇⣿⣿⣶⣤⡀⠀⠀⠙⢆⠀⠀⠀⠀⠀⣠⡪⢀⣤⣾⣿⣿⣿⣿⣸\n⠀⡇⠛⠛⠛⢿⣿⣷⣦⣀⠀⣳⣄⠀⢠⣾⠇⣠⣾⣿⣿⣿⣿⣿⣿⣽ \n⠀⠯⣠⣠⣤⣤⣤⣭⣭⡽⠿⠾⠞⠛⠷⠧⣾⣿⣿⣯⣿⡛⣽⣿⡿⡼\n⠀⡇⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣮⡛⢿⠃\n⠀⠀⢸⠁⠀⠀⢠⣏⣨⣉⡃⠀⠀⠀⢀⣜⡉⢉⣇⠀⠀⠀⢹⡄⠀\n⠀⠀⡾⠄⠀⠀⢸⣾⢏⡍⡏⠑⠆⠀⢿⣻⣿⣿⣿⠀⠀⢰⠈⡇⠀\n⠀⢰⢇⢀⣆⠀⢸⠙⠾⠽⠃⠀⠀⠀⠘⠿⡿⠟⢹⠀⢀⡎⠀⡇⠀⠀\n⠀⠘⢺⣻⡺⣦⣫⡀⠀⠀⠀⣄⣀⣀⠀⠀⠀⠀⢜⣠⣾⡙⣆⡇⠀⠀\n⠀⠀⠀⠙⢿⡿⡝⠿⢧⡢⣠⣤⣍⣀⣤⡄⢀⣞⣿⡿⣻⣿⠞⠀⠀⠀\n⠀⠀⠀⢠⠏⠄⠐⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠳⢤⣉⢳⠀⠀⠀\n⢀⡠⠖⠉⠀⠀⣠⠇⣿⡿⣿⡿⢹⣿⣿⣿⣿⣧⣠⡀⠀⠈⠉⢢⡀⠀\n⢿⠀⠀⣠⠴⣋⡤⠚⠛⠛⠛⠛⠛⠛⠛⠛⠙⠛⠛⢿⣦⣄⠀⢈⡇⠀\n⠈⢓⣤⣵⣾⠁⣀⣀⠤⣤⣀⠀⠀⠀⠀⢀⡤⠶⠤⢌⡹⠿⠷⠻⢤⡀\n⢰⠋⠈⠉⠘⠋⠁⠀⠀⠈⠙⠳⢄⣀⡴⠉⠀⠀⠀⠀⠙⠂⠀⠀⢀⡇\n⠀⠑⠸⢿⠀⠀⠀⠀⢈⡗⠭⣖⡒⠒⢊⣱⠀⠀⠀⠀⢨⠟⠂⠚⠋⠀\n⠀⠀⠀⠘⠦⣄⣀⣠⠞⠀⠀⠀⠈⠉⠉⠀⠳⠤⠤⡤⠞⠀⠀")
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
const Ambar = ["Ambar", "ambar", "AMBAR", "pedro", "Pedro", "PEDRO", "<@846074657240645653>"]
const ratiOWOrds = ["ratio", "RATIO", "bozo", "BOZO", "don’t care", "DONT CARE", "dont care", "Don't care", "Dont care", "didn’t ask", "DIDNT ASK", "didnt ask", "DIDN'T ASK", " L ", " kys", " KYS", "cry about it", "cry abt it", "CRY ABOUT IT", "get real", "GET REAL", "who asked", "WHO ASKED", "cope", "COPE", "Cope", "!ratio"]
const CatWords = ["this is cat is", "THIS CAT IS", "This Cat Is", "this cat is", "!cat", "This cat is"]
const AchoWords = ["Acho", "acho", "ACHO"]
const IThinkWords = ["I think", "i think", "I THINK"]
const IfOnlyWords = ["If only", "IF ONLY", "ifonly", "if only", "IFONLY", "IfOnly"]
const RuiWords = ["rui", "RUI", "Rui", "rUI", "RuI", "<@584137309423796224>", "ruI", "rUi", "RUi"]
const RobloxArgumentWords = ["ClientSided", "Tactical_Neko", "RobloxArgument", "RobloxDrama", "argument", "Argument", "ARGUMENT", "aRGUMENT"]
const SexUpdate2023 = ["!sex"]

//TriggerRandom
const FBI_CLOSE_UP = ["Can't have shit in Detroit.", "HOW DID THEY FIND ME", "Gotta find a lawyer, I guess.", "ONDE?!", "Officer I can explain", "She's 16, almost 17, which is basically 18."]

const UnsaidGIFS = ["https://cdn.discordapp.com/attachments/866738433421344789/997510827345195070/unknown.gif", "https://tenor.com/view/me-when-fat-man-when-the-gif-22060334", "https://tenor.com/view/3d-saul-saul-goodman-adamghik-gif-23876766", "https://tenor.com/view/me-when-the-when-the-beamng-gif-22226593", "https://tenor.com/view/hoi4-paradox-eu4-ck3-ck2-gif-23373729", "https://tenor.com/view/walter-faint-when-the-me-gif-22116523", "https://tenor.com/view/pog-dog-heart-locket-me-when-the-gif-24920086", "https://tenor.com/view/me-when-the-gif-19084226", "https://tenor.com/view/when-the-me-sonic-me-when-the-gif-19555618", "https://tenor.com/view/me-when-me-whe-the-when-the-me-when-me-when-the-me-me-the-when-me-the-me-the-when-gif-21875472", "https://tenor.com/view/me-when-the-markiplier-is-that-the-bite-of87-gif-19770814", "https://tenor.com/view/me-when-the-meme-explaining-gif-25104447", "https://tenor.com/view/when-the-gif-19615076", "https://tenor.com/view/me-when-the-when-the-meme-dance-run-gif-17755762", "https://tenor.com/view/me-when-black-me-when-the-meme-funny-gif-24554095", "https://tenor.com/view/me-when-gif-22421002"]

const SaidGIFS = ["https://cdn.discordapp.com/attachments/866738433421344789/1004732651208441978/unknown.png", "https://cdn.discordapp.com/attachments/866738433421344789/1004732651493662750/VID-20220731-WA0001.mp4", "https://tenor.com/view/portugal-gif-25623708", "https://tenor.com/view/portugal-gif-22788330", "https://tenor.com/view/danny-house-meme-help-portugal-portugalyippee-gif-25266502", "https://tenor.com/view/portugal-homem-homem-portugal-average-portuguese-male-gif-17330854", "https://tenor.com/view/portugal-portuguese-portugese-furga-danny-house-gif-24111565", "https://cdn.discordapp.com/attachments/995331136903458938/1004815414641049630/PT2.mp4", "https://cdn.discordapp.com/attachments/995410565314924554/1004821037843755098/PT_slander.mp4", "https://cdn.discordapp.com/attachments/995331136903458938/1004862869839544360/sus.png", "https://tenor.com/view/ab%C3%B3bora-com-leite-ab%C3%B3bora-eu-quando-gif-22387094", "https://cdn.discordapp.com/attachments/995410565314924554/1008478123899244614/1v1.mp4", "https://cdn.discordapp.com/attachments/995410565314924554/1011371090389520516/Screenshot_20220821-155934_YouTube.jpg"]

const CatGIFS = ["https://tenor.com/view/kitty-review-cute-kitty-funny-cat-cat-review-gif-21188467", "https://tenor.com/view/this-is-cat-is-d-fall-cute-pet-gif-16272929", "https://tenor.com/view/cat-this-cat-is-post-this-cat-cat-flying-gif-25220367", "https://tenor.com/view/cat-this-cat-this-cat-is-f-funny-gif-funny-cat-gif-22143255", "https://tenor.com/view/this-cat-this-cat-is-this-is-this-cat-is-r-this-gif-16319547", "https://tenor.com/view/this-cat-is%C3%B8-swagmaster89original-gif-24386349", "https://tenor.com/view/this-cat-is-cr-gif-25403373", "https://tenor.com/view/omori-mewo-cat-this-cat-is-r-gif-25290143", "https://tenor.com/view/kitty-review-gif-26082295", "https://tenor.com/view/everybody-wants-to-be-my-enemy-gif-25254672", "https://tenor.com/view/kitty-review-kitty-cat-meme-funny-gif-20978803", "https://tenor.com/view/kitty-review-cat-insane-gif-21576551", "https://tenor.com/view/kitty-review-ugly-bingus-kitty-gif-21504000", "https://tenor.com/view/kitty-review-cat-kitty-review-gif-20973774", "https://tenor.com/view/kitty-review-cat-gamer-cat-pro-gamer-gif-21395567", "https://tenor.com/view/what-the-dog-doing-this-cat-just-j-blocked-gif-21619262", "https://tenor.com/view/cat-funny-this-cat-just-j-gif-20559236"]

const IfOnlyGIFS = ["https://tenor.com/view/mercy-alcohol-gif-24056926", "https://tenor.com/view/kids-getting-run-over-meme-ad-kids-run-over-gif-22566267", "https://tenor.com/view/dating-gif-26388733", "https://tenor.com/view/ip-twitter-gif-26177251", "https://tenor.com/view/ao-oni-knife-if-only-i-had-a-knife-funny-jazzycars-gif-21089063"]

const RUI_BALLS = ["I need balls", "I NEED BALLS", "https://tenor.com/view/kamishiro-rui-rui-kamishiro-this-is-a-joke-project-sekai-puroseka-gif-25353578"]

const ArgumentoCLOSE_UP = ["shut the hell up and jump off a building or smth", "this dumb overconfident anime girl with no right or point to live on this planet wont stop bothering this guy that just wants to chill", "im gonna find this annoying overconfident fatherless loser with no point in life but to exist just for the worst of things to happen to her child", "i have to either 1v1 them or see them leave", "ur dad ran from you", "you probably function like a machine, being used over and over again and now it created you, some random woman that roams around in games where people are mostly chill and randomly start arguments bec"]

const AprilFools2023 = ["https://media.discordapp.net/attachments/497142796961054721/1024064368377335851/attachment-8.gif", "https://tenor.com/view/%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-speech-bubble-gif-25663959", "https://tenor.com/view/smadging-speech-bubble-speech-bubble-smadging-gif-26061412", "https://tenor.com/view/speechbubble-speech-bubble-please-meme-gif-25693113", "https://tenor.com/view/volatil3-speech-bubble-gif-26229503", "https://tenor.com/view/lego-island-brickster-discord-speech-bubble-gif-25986049", "https://tenor.com/view/speech-bubble-gif-25352052", "https://tenor.com/view/cat-typing-speech-bubble-kitty-gif-25862715", "https://tenor.com/view/speech-bubble-gif-25768562", "https://tenor.com/view/ishowspeed-speech-bubble-gif-25561001"]


//TriggerHours (non functional)
const AmbarQuotes = ["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "cringe", "lmao quem é esse", "do not disturb the lord", "hm....", "Sim ? oh espera...", "ayo ?"]

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
const startupmessages = ["with depression", "amogus", "with balls", "KILLKILLKILLKILL", "with windows 10", "miceraft", "a delicate game of chess", "with words", "with ur feelings", "along with u", "HIDE N SEEK BITCH", "with yo mom", "funny dream game", "fbi is spying on u", "REPLIT DOT COM", "famousphobia", "startupmessages", "engineer", "cable management", "minecraft modpacks", "discord 2", "Tinky - unfortunaly no", "with dementia", "divorce sim", "funny winter game", "*stalking", "walter, put your", "I AM THE ONE WHO HEARS", "I got ur ip", "kys", "waterlemon eating", "wrindows_9", "touhou", "YATTA", "rui simulator", "index.js", "README", "discord.js v69", "without motivation", "dw", "dementia", "dementia", "dementia", "OFF", "shut the fuck up, Im balling", "Currently playing:", "Playing", "boblox", "an awful of game of checkers", "Hit error code 429", "/dinsi", "reimu gaming", "miku gaming", "cirno gaming", "rythme gaymes", "cardiac arrest", "amercia sim", "capitalism"]
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


//AUTH (If console displays "Hit 429 while executing request", use "kill 1" on shell)
const mySecret = process.env["token"]
client.login(process.env.token)
client.on('debug', console.log);
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(randomstartup)
  console.log(randomstartup)
});