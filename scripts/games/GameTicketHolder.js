import { TicketBooth } from "../TicketBooth.js";

const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("ticketSelected", customEvent => {
        const userChoiceElement = document.querySelector("#gameTicket")
        userChoiceElement.innerHTML = customEvent.detail.selectedTickets
        contentTarget.innerHTML += `<div class = "person games"></div>`
    })
}
TicketBooth()