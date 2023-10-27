// document.addEventListener("click", (e) => {
//   const target = e.target.innerText.toLowerCase()
//   if (
//     (target && target.includes("buy")) ||
//     target.includes("confirm") ||
//     target.includes("checkout") ||
//     target.includes("purchase") ||
//     target.includes("pay") ||
//     target.includes("proceed") ||
//     target.includes("place order") ||
//     target.includes("place your order") ||
//     target.includes("place my order")
//   ) {
//     e.preventDefault() // prevent the button from performing its default action
//     chrome.runtime.sendMessage({ type: "showPopup" })
//   }
// })

document.addEventListener("click", (e) => {
  e.preventDefault()
  chrome.runtime.sendMessage({ type: "showPopup" })
})
