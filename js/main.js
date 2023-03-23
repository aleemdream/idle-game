let fishCount = 0;
let fishingRodCount = 0;
let fishingNetCount = 0;
let fishingRodPrice = 10;
let fishingNetPrice = 50;

function catchFish() {
    // Calculate chance of catching a fish
    let chance = 1;
    if (fishingRodCount > 0) {
        chance += 0.1 * fishingRodCount;
    }
    if (fishingNetCount > 0) {
        chance += 0.2 * fishingNetCount;
    }

    // Generate random number and check if a fish was caught
    var rand = Math.random();
    if (rand <= chance) {
        // Generate random number of fish caught
        var fishCaught = Math.floor(Math.random() * 5) + 1;

        // Update fish count
        fishCount += fishCaught;
        document.getElementById("fish-count").innerHTML = fishCount;
    }
    
    spitCatchCount(fishCaught);
}

function buyUpgrade(upgrade) {
    if (upgrade === 1) {
        if (fishCount >= fishingRodPrice) {
            fishingRodCount++;
            fishCount -= fishingRodPrice;
            fishingRodPrice *= 2;
            document.getElementById("fish-count").innerHTML = fishCount;
            document.getElementById("upgrade-1").innerHTML = fishingRodCount;
            document.getElementsByTagName("button")[1].innerHTML = "Fishing Rod ($" + fishingRodPrice + ")";
        }
    } else if (upgrade === 2) {
        if (fishCount >= fishingNetPrice) {
            fishingNetCount++;
            fishCount -= fishingNetPrice;
            fishingNetPrice *= 2;
            document.getElementById("fish-count").innerHTML = fishCount;
            document.getElementById("upgrade-2").innerHTML = fishingNetCount;
            document.getElementsByTagName("button")[2].innerHTML = "Fishing Net ($" + fishingNetPrice + ")";
        }
    }
}

function spitCatchCount(count) {
    let caughtFish = document.createElement("div");
    caughtFish.classList.add("caught-fish");

    caughtFish.innerHTML = "+" + count;
    document.getElementsByClassName("dock")[0].appendChild(caughtFish);

    caughtFish.classList.toggle("catch");
    setTimeout(function(){
        let transY = Math.floor(Math.random() * 100) - 50;
        let transX = Math.floor(Math.random() * 25) + 25;
        caughtFish.style.transform = `translate(${transX}px, ${transY}px)`;

        caughtFish.classList.toggle("catch");
        setTimeout(() => {
            caughtFish.remove();
        }, 1001);
    });
}

// // Set up interval to automatically catch fish every second
// setInterval(function() {
//   catchFish();
// }, 1000);
