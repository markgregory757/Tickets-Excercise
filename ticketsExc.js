function tickets(ticketInfo, sortBy) {
    let schedule = [];

    class Tickets {
     constructor (destination, price, stat) {
        this.destination = destination;
        this.price = price;
        this.stat = stat;
    }
}

ticketInfo.forEach(city => {
    let [destination, price, stat] = city.split("|");
    schedule.push(new Tickets(destination, price, stat));
})

if (sortBy === "price") {
    // schedule.sort( (a, b) => {
    //     if (a.destination < b.destination) {
    //         return -1;
    //     }
    //     if (a.destination > b.destination) {
    //         return 1;
    //     }
    //     return 0;
    // })

    schedule.sort((a, b) => a.price - b.price);
} else if (sortBy === "destination") {
    schedule.sort((a, b) => a.destination.localeCompare(b.destination));

} else if (sortBy === "status") {
schedule.sort((a, b) => a.stat.localeCompare(b.stat));
} else {
    return "Error"
}

    console.log(schedule);

    schedule.sort
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)