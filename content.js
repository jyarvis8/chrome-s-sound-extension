//alert("Hiiiiiiii!")
document.addEventListener('click', () => {
	let url = chrome.runtime.getURL('click.mp3')
	console.log(url)
	let a = new Audio(url)
	a.play()
})
