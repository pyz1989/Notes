function throttle(fn, delay){
	let last = 0;

	let curr = +new Date();
	if (curr - last > delay) {
		fn.apply(this, arguments);
		last = curr;
	}
}