// debounce函数用来包裹我们的事件
function debounce(fn, delay) {
	// 持久化一个定时器 timer
	let timer = null;

	return function() {
		// 通过 'this' 和 'arguments'
    	// 获得函数的作用域和参数
		let context = this;
		let args = arguments;
		//// 如果事件被触发，清除 timer 并重新开始计时
		clearTimeout(timer);
		timer = setTimeout(function() {
			fn.applay(context, args);
		}, delay);
	}
}