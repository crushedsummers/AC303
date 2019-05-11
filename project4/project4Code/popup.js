$(document).ready(function(){
	$("#drive").on("click", function(){
		chrome.tabs.create({"url": "https://drive.google.com/drive/u/0/recent"});
	})
	$("#gmail").on("click", function(){
		chrome.tabs.create({"url": "https://mail.google.com/mail/u/0/#inbox"});
	})
	$("#translate").on("click", function(){
		chrome.tabs.create({"url": "https://translate.google.com/"});
	})
	$("#toggl").on("click", function(){
		chrome.tabs.create({"url": "https://toggl.com/app/timer"});
	})
	$("#github").on("click", function(){
		chrome.tabs.create({"url": "https://github.com/crushedsummers"});
	})
	$("#bungo").on("click", function(){
		chrome.tabs.create({"url": "https://bungo.fandom.com/wiki/Writers"});
	})
	$("#SS").on("click", function(){
		chrome.tabs.create({"url": "senjyushi-game.wikia.com/wiki/Characters"});
	})
	$("#delve").on("click", function(){
		chrome.tabs.create({"url": "http://pc-play.games.dmm.com/play/bungo/"});
	})
	$("#nico").on("click", function(){
		chrome.tabs.create({"url": "https://www.youtube.com/user/NicoB7700/videos"});
	})
	$("#movie").on("click", function(){
		chrome.tabs.create({"url": "https://www.putlockers.me/"});
	})
	$("#pong").on("click", function(){
		chrome.tabs.create({"url": "https://crushedsummers.github.io/AC303/project3/"});
	})
	$("#extension").on("click", function(){
		chrome.tabs.create({"url": "chrome://extensions/"});
	})
});