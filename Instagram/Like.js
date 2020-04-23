(function bot() {
	let interval;
	async function like_next() {
		document.querySelector('.ltpMr.Slqrh .wpO6b').click();
		interval = setTimeout(function () {
			document.querySelector('._65Bje.coreSpriteRightPaginationArrow').click();
		}, 1050);
	}

	function repeat() {
		interval = setTimeout(function () {
			like_next().then(repeat());
		}, 1050);
	}
	repeat();
})();