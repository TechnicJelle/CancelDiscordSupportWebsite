//array of https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
const webs =  [
	{hostContains: "support.discord.com"},
];

browser.webNavigation.onBeforeNavigate.addListener(
	(details) => {
		browser.tabs.remove(details.tabId);
		browser.windows.update(details.windowId, {"state": "minimized"});
	},
	{url: webs}
);
