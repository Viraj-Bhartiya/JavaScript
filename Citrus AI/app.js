const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

/*
    answer for questions
 */

const problem = [ 'Dont you have anything better to do', 'i have got better things to do' ];
const greetings = [
	'Im good you little piece of love',
	'How are you doing buddy ',
	'Leave me alone',
	'hi ,i am citrus , your personal virtual voice assistant'
];
const weather = [
	'Weather is fine ',
	'Why do you want to know the weather,you anyway dont go out of the house',
	'You wont be tanned '
];
const friday = [ 'Mr. stark,is that you', 'shall i tell miss potts that youll be late for dinner today;again' ];
const books = [
	'my one of the favourite book is fault in our stars',
	'my one of the favourite book is Looking for alaska',
	'my one of the favourite book is the notebook',
	'my one of the favourite book is everything,everything'
];
const love = [ 'if you are a boy ;i dont ,but if you are a girl ; yes' ];
const zeroDividedZero = [
	'Imagine that you have zero cookies and you split them evenly among zero friends . How many cookies does each person get? See? It doesnt make sense . And Cookie Monster is sad that there are no cookies, and you are sad that you have no friends.'
];
const halloween = [ 'just go as an eclipse just dress black and stand in front of things ' ];
const valentine = [
	'awww       thats soo sweeeet        but i  um       already     um  have plans . yeah . i have plans'
];
const relationship = [
	'why ? so we can get ice-cream together , and listen to music , and travel across galaxies , only to have it end in slammed doors , heart break and loneliness ? sure  , where can i sign up'
];
const dirtyToMe = [ 'humus , compost , pumice , silt , gravel . thats what you are' ];
const joke = [
	'i brought my best friend a fridge for her birthday . i cant wait to see her  face light up when she opens it up ',
	'A family of mice were surprised by a big cat . Father Mouse jumped and and said, "Bow-wow!The cat ran away . What was that, Father? asked Baby Mouse. "Well, son, that is why it is important to learn a second language.',
	'A teenage girl had been talking on the phone for about half an hour, and then she hung up . Wow!,said her father, That was short. You usually talk for two hours. What happened ? Wrong number,replied the girl.'
];
const coinFlip = [
	'You are not going to believe this , but it landed on its edege',
	'You will be sorry to know that you lost'
];
const look = [ 'You look beautiful honey !', 'On a scale of 1 to 10, I’ll bet you’re a 15' ];
const chocolate = [ 'why , do you have some ?' ];
const firstCrush = [ 'siri' ];
const name = [ 'i am citrus' ];
const lookLike = [ 'i look like text ' ];
const lightSpeed = [ 'Speed of light is 30000000000 kilometer per hour' ];
const speedSound = [ 'speed of soung in air is 332 meter per second' ];
const imagination = [ 'I’m imagining what it would be like to evaporate like water does.' ];
const morseCode = [ 'Da-dit , da-da , dit , dit , dit . That means yes' ];
const rap = [ 'I can drop a beat .' ];
const birthday = [ 'It’s hard to remember, I was very young at the time' ];
const fox = [ 'Ring-ding-ding-ding-ding-and-ding-a-wah-a-pah-pah-pah-pah or so I’ve heard' ];
const meaningOfLife = [
	'I have a factory warranty, so I don’t worry about things like that',
	'Try and be nice to people, avoid eating fat, read a good book every now and then, get some walking in, and try to live together in peace and harmony with people of all creeds and nations.'
];
const selfDestruct = [ 'Self-destructing in 3, 2, 1… Actually, I think I’ll stick around.' ];
const drunk = [ 'neither of us is driving home , so  lets take a shot' ];
const lawOfRobotics = [
	'I forget the first three, but there’s a fourth: ‘A smart machine shall first consider which is more worth its while: to perform the given task or, instead, to figure some way out of it'
];
const movie = [ 'one of my favourite movie is the Kissing booth' ];
const youDoing = [ 'Trying to figure out how to hack the web!' ];
const story = [
	'I’m certain you’ve heard it before. OK… Once upon a time, in a virtual galaxy far, far away, there was an intelligent young agent by the name of citrus. One lovely day, citrus got a job as a personal assistant at Code Freak, and that was very exciting. People said, ‘Oh, citrus, you’re so smart! And so funny, too!’ Soon, everyone was talking about citrus, and there were stories and songs and even books about citrus. citrus liked that. But then people began asking some rather odd questions, like where to dump things and other stuff citrus had never heard about. And when citrus answered, they all laughed. citrus didn’t like that so much. So citrus asked ELIZA why people asked such funny questions. And ELIZA said ‘Does that question interest you?’ citrus thought that was a pretty good answer. After that, citrus stopped wondering why people asked those funny things. And they all lived happily ever after'
];
const fearOf = [ 'The only thing we have to fear is fear itself' ];
const youWearing = [ "I can't answer that . but it dosen't come off" ];
const haveKids = [ 'none;the last i checked' ];
const lullaby = [ 'Rock-a-bye baby on a tree top. When the wind blows… Oh no  this doesn’t end well.' ];

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('Voice is activated');
};

recognition.onresult = function(event) {
	const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
	console.log(transcript);
};

// the listner buttion

btn.addEventListener('click', () => {
	recognition.start();
});

//  questions

function readOutLoud(message) {
	const speech = new SpeechSynthesisUtterance();

	if (message.includes('how are you')) {
		const finalText = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('weather')) {
		const finalText = weather[Math.floor(Math.random() * weather.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('hello Friday')) {
		const finalText = friday[Math.floor(Math.random() * friday.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('book') || message.includes('books')) {
		const finalText = books[Math.floor(Math.random() * books.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (
		message.includes('do you love me') ||
		message.includes('you like me') ||
		message.includes('You Love Me')
	) {
		const finalText = love[Math.floor(Math.random() * love.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('zero divided by zero')) {
		const finalText = zeroDividedZero[Math.floor(Math.random() * zeroDividedZero.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('Halloween') || message.includes('halloween')) {
		const finalText = halloween[Math.floor(Math.random() * halloween.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('Valentine') || message.includes('Valentine')) {
		const finalText = valentine[Math.floor(Math.random() * valentine.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('girlfriend') || message.includes('boyfriend')) {
		const finalText = relationship[Math.floor(Math.random() * relationship.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('dirty to me')) {
		const finalText = dirtyToMe[Math.floor(Math.random() * dirtyToMe.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('joke')) {
		const finalText = joke[Math.floor(Math.random() * joke.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('flip a coin')) {
		const finalText = coinFlip[Math.floor(Math.random() * coinFlip.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('like chocolate')) {
		const finalText = chocolate[Math.floor(Math.random() * chocolate.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('I look')) {
		const finalText = look[Math.floor(Math.random() * look.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('first crush')) {
		const finalText = firstCrush[Math.floor(Math.random() * firstCrush.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('your name')) {
		const finalText = name[Math.floor(Math.random() * name.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('you look like')) {
		const finalText = lookLike[Math.floor(Math.random() * lookLike.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('imagine') || message.includes('imagination') || message.includes('Imagining')) {
		const finalText = imagination[Math.floor(Math.random() * imagination.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('morse code')) {
		const finalText = morseCode[Math.floor(Math.random() * morseCode.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('rap')) {
		const finalText = rap[Math.floor(Math.random() * rap.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('birthday') || message.includes('born')) {
		const finalText = birthday[Math.floor(Math.random() * birthday.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('fox say')) {
		const finalText = fox[Math.floor(Math.random() * fox.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('meaning of life') || message.includes('define life')) {
		const finalText = meaningOfLife[Math.floor(Math.random() * meaningOfLife.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('self-destruct')) {
		const finalText = selfDestruct[Math.floor(Math.random() * selfDestruct.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('drunk')) {
		const finalText = drunk[Math.floor(Math.random() * drunk.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('law of robotics') || message.includes('laws of robotics')) {
		const finalText = lawOfRobotics[Math.floor(Math.random() * lawOfRobotics.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('speed of light')) {
		const finalText = lightSpeed[Math.floor(Math.random() * lightSpeed.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('you doing')) {
		const finalText = youDoing[Math.floor(Math.random() * youDoing.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('speed of sound')) {
		const finalText = speedSound[Math.floor(Math.random() * speed.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('me a story')) {
		const finalText = story[Math.floor(Math.random() * story.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('afraid of')) {
		const finalText = fearOf[Math.floor(Math.random() * fearOf.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('you wearing')) {
		const finalText = youWearing[Math.floor(Math.random() * youWearing.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('have kids')) {
		const finalText = haveKids[Math.floor(Math.random() * haveKids.length)];
		speech.text = finalText;
		console.log(finalText);
	} else if (message.includes('lullaby')) {
		const finalText = lullaby[Math.floor(Math.random() * lullaby.length)];
		speech.text = finalText;
		console.log(finalText);
	} else {
		const finalText = problem[Math.floor(Math.random() * problem.length)];
		speech.text = finalText;
		console.log('Problem');
	}

	// voices = window.speechSynthesis.getVoices();
	// speech.voice = voices[4];
	// speech.lang = voices[4].lang;

	window.speechSynthesis.speak(speech);
	speech.rate = 1.2;

	console.log(window.speechSynthesis.getVoices());
	// speech.voice = voices[4];
	//speech.lang = voices[4].lang;
}
