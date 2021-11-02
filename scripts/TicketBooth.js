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
// Game Ticket Custom Event 
export const gameEvent = new CustomEvent("gameTicketPurchased", {
    detail: {
        selectedTickets: "#gameTicket"
    }
})
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "gameTicket") {
            eventHub.dispatchEvent(new CustomEvent ("gameTicketPurchased"))
        }
    }
)
// Sideshow Ticket Custom Event 
export const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
    detail: {
        selectedTickets: "#sideshowTicket"
    }
})
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "sideshowTicket") {
            eventHub.dispatchEvent(new CustomEvent ("sideshowTicketPurchased"))
        }
    }
)
// Full Package Custom Event
export const fullPackageEvent = new CustomEvent("fullPackageTicketPurchased", {
    detail: {
        selectedTickets: "#fullPackageTicket"
    }
})
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "fullPackageTicket") {
            eventHub.dispatchEvent(new CustomEvent ("fullPackageTicketPurchased"))
        }
    }
)


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <div id="ticketsPurchased"></div>
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

