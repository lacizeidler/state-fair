import { TicketBooth } from "../TicketBooth.js"

const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("ticketSelected", customEvent => {
        const userChoiceElement = document.querySelector("#rideTicket")
        userChoiceElement.innerHTML = customEvent.detail.selectedTickets
        contentTarget.innerHTML += `<div class = "person  rider"></div>`
    })
}

TicketBooth()