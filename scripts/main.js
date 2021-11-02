// Import and invoke the ticket booth component function
import { foodTicketHolders } from "./food/FoodTicketHolder.js";
import { FullPackageTicketHolders } from "./fullPackage.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js";
import { TicketBooth } from "./TicketBooth.js";
import { SampleComponent } from "./ticketCounter.js";
SideshowTicketHolders()
GameTicketHolders()
foodTicketHolders()
RideTicketHolders()
TicketBooth()
FullPackageTicketHolders()
SampleComponent()