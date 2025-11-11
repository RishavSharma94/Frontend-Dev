let level = 15;
let performanceScore = 30;
let missionsCompleted = true;

let coins = (level * 50) + (performanceScore * 10);

if (missionsCompleted === true) {
    coins = coins * 2;
}

let rank = coins > 1000 ? "Elite" : "Regular";

console.log("------ Game Reward Summary ------");
console.log("Player Level: " + level);
console.log("Performance Score: " + performanceScore);
console.log("Missions Completed: " + (missionsCompleted ? "Yes" : "No"));
console.log("Total Coins Earned: " + coins);
console.log("Player Rank: " + rank);
console.log("--------------------------------");
