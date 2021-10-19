import { TicketBooth } from "../TicketBooth.js"

const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const foodTicketHolders = () => {
    eventHub.addEventListener("ticketSelected", customEvent => {
        const userChoiceElement = document.querySelector("#foodTicket")
        userChoiceElement.innerHTML = customEvent.detail.selectedTickets
        contentTarget.innerHTML += `<div class = "person eater"></div>`
    })
}

TicketBooth()