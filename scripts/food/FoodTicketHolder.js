
const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const foodTicketHolders = () => {
    eventHub.addEventListener("foodTicketSelected", customEvent => {
        contentTarget.innerHTML += `<div class = "person eater"></div>`
    })
}

