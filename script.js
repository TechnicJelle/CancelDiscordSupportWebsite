browser.permissions.getAll().then((perms) => {
	console.log(perms.origins);
	browser.tabs.onUpdated.addListener(
		(tabId) => {
			browser.tabs.remove(tabId);
			browser.windows.update(browser.windows.WINDOW_ID_CURRENT, {"state": "minimized"});
		},
		{
			"urls": perms.origins
		}
	);
});
