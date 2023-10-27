// // show popup function
// function showPopup() {
//   const popup = document.querySelector(".popup-container")
//   popup.style.display = "block"
// }

// // popup funciton:
// // user clicks on 'yes' btn -> if all the items are checked: hide popup and proceed to next page
// // user clicks on 'no' btn -> hide popup and the same page remains
// document.getElementById("proceed-btn").addEventListener("click", (e) => {
//   if (allItemsChecked()) {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       // Get the currently active tab
//       const activeTab = tabs[0]

//       // Define the URL of the next page
//       const nextURL = e.target.href

//       // Update the URL of the active tab to navigate to the next page
//       chrome.tabs.update(activeTab.id, { url: nextURL }, () => {
//         // Close the popup
//         window.close()
//       })
//     })
//   }
// })

// function allItemsChecked() {
//   const checklistItems = document.querySelectorAll("#checkbox")
//   for (const checkbox of checklistItems) {
//     if (!checkbox.checked) {
//       return false
//     }
//   }
//   return true
// }

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "showPopup") {
    // Code to show the web built in dialog
    window.alert("Are you sure you want to proceed?")
  }
})

document.getElementById("proceed").addEventListener("click", function () {
  // Proceed with the purchase or close the popup
  window.close()
})

document.getElementById("cancel").addEventListener("click", function () {
  // Cancel the purchase or close the popup
  window.close()
})
