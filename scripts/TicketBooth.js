const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// const contentTargetIsh = document.querySelector("#rideTicket")

export const SampleComponent = () => {
    let totalTickets = 0
    document.querySelector("#ticketsPurchased").innerHTML = `Total tickets purchased: ${++totalTickets}`
}
// Ride Ticket Custom Event 
eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "rideTicket") {
            eventHub.dispatchEvent(new CustomEvent ("rideTicketPurchased"))
            SampleComponent()
        } else if (clickEvent.target.id === "foodTicket") {
            eventHub.dispatchEvent(new CustomEvent ("foodTicketPurchased"))
            SampleComponent()
        } else if (clickEvent.target.id === "gameTicket") {
            eventHub.dispatchEvent(new CustomEvent ("gameTicketPurchased"))
            SampleComponent()
        } else if (clickEvent.target.id === "sideshowTicket") {
            eventHub.dispatchEvent(new CustomEvent ("sideshowTicketPurchased"))
            SampleComponent()
        } else if (clickEvent.target.id === "fullPackageTicket") {
            eventHub.dispatchEvent(new CustomEvent ("fullPackageTicketPurchased"))
            SampleComponent()
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

