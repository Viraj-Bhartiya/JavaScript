(() => {
	let i = 0;
	const follow = setInterval(() => {
		if(i>=30){
			clearInterval(follow);
			return;
		}
		const buttons = document.querySelectorAll('button');
		const nextButton = buttons[i];
		nextButton.click();
		i++;
	},500);
})();