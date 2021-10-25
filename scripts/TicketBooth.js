const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// Ride Ticket Custom Event 
export const rideEvent = new CustomEvent("rideTicketPurchased", {
    detail: {
        selectedTickets: "#rideTicket"
    }
})
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "rideTicket") {
            eventHub.dispatchEvent(new CustomEvent ("rideTicketPurchased"))
        }
    }
)
// Food Ticket Custom Event
export const foodEvent = new CustomEvent("foodTicketPurchased", {
    detail: {
        selectedTickets: "#foodTicket"
    }
})
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "foodTicket") {
            eventHub.dispatchEvent(new CustomEvent ("foodTicketPurchased"))
        }
    }
)



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

