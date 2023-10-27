chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "showPopup") {
    chrome.notifications.create({
      type: "basic",
      title: "Your Extension Name",
      message: "Your message here.",
    })
  }
})
