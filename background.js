chrome.tabs.onCreated.addListener(function() {
    let url = chrome.runtime.getURL('created.mp3')
	console.log(url)
	let a = new Audio(url)
	a.play()
  });
chrome.tabs.onDetached.addListener(function() {
    let url = chrome.runtime.getURL('detached.mp3')
	console.log(url)
	let a = new Audio(url)
	a.play()
  });
chrome.tabs.onMoved.addListener(function() {
    let url = chrome.runtime.getURL('moved.mp3')
	console.log(url)
	let a = new Audio(url)
	a.play()
  });
chrome.tabs.onRemoved.addListener(function() {
    let url = chrome.runtime.getURL('removed.mp3')
	console.log(url)
	let a = new Audio(url)
	a.play()
  });
chrome.tabs.onZoomChange.addListener(function() {
        let url = chrome.runtime.getURL('zoom.mp3')
        console.log(url)
        let a = new Audio(url)
        a.play()
  });
