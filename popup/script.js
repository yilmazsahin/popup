const openPopupElement = document.querySelectorAll("[data-open-popup]")
const closePopupElement = document.querySelectorAll("[data-close-popup]")
const blackPanel = document.querySelector(".black-panel")

//OPEN POPUP
openPopupElement.forEach(Element => {
    Element.addEventListener("click", function () {
        openPopup(Element.dataset.openPopup)
    })
})
function openPopup(Element) {
    if (Element == null) return;
    document.querySelector(Element).classList.add("active");
    blackPanelOpen();
}

// BLACK PANEL OPEN AND CLOSE
function blackPanelOpen() {
    blackPanel.classList.add("active");
}
function blackPanelClose() {
    blackPanel.classList.remove("active");
}

// CLOSE POPUP
closePopupElement.forEach(Element => {
    Element.addEventListener("click", function () {
        const popup = Element.closest(".popup");
        popupClose(popup);
    })
})
function popupClose(Element) {
    Element.classList.remove("active");
    blackPanelClose();
}

blackPanel.addEventListener("click", function () {
    blackPanelClose();
    allPopupClose()
})

function allPopupClose() {
    document.querySelectorAll(".popup.active").forEach(Element => { Element.classList.remove("active"); })

}
