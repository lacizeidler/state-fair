
// This is a module-level variable. It is not scoped to a function
const contentTarget = document.querySelector("#rideTicket")
const eventHub = document.querySelector("#state-fair")
let html = 0


contentTarget.onclick = function () {
    html++
    eventHub.innerHTML = html
}

contentTarget.innerHTML = `Total tickets purchased: ${SampleComponent()}`
