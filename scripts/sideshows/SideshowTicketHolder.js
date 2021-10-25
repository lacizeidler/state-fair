import { TicketBooth } from "../TicketBooth.js";
 
const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const sideshowTicketHolders = () => {
    eventHub.addEventListener("ticketSelected", customEvent => {
        const userChoiceElement = document.querySelector("sideshowTicket")
        userChoiceElement.innerHTML = customEvent.detail.selectedTickets
        contentTarget.innerHTML += `
        <div class = "person sideshow"></div>
        `
    }
    )
}
