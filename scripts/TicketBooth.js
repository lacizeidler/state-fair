
const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


// Ride Ticket Custom Event 
const rideEvent = new CustomEvent("rideTicketPurchased", {
    detail: {
        selectedTickets: "#rideTicket"
    }
})
eventHub.dispatchEvent(rideEvent)

// Food Ticket Custom Event
const foodEvent = new CustomEvent("foodTicketPurchased", {
    detail: {
        selectedTickets: "#foodTicket"
    }
})
eventHub.dispatchEvent(foodEvent)

// Game Ticket Custom Event 
const gameEvent = new CustomEvent("gameTicketPurchased", {
    detail: {
        selectedTickets: "#gameTicket"
    }
})
eventHub.dispatchEvent(gameEvent)

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

