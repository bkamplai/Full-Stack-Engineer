// Categories for generating messages
const categories = {
    astrology: {
        signs: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
        predictions: ["today is your lucky day", "a surprise is heading your way", "you'll find clarity in a puzzling situation", "new opportunities are on the horizon", "someone close to you will reveal a secret"],
        advice: ["trust your instincts", "take it one step at a time", "focus on the bigger picture", "be open to new experiences", "keep your emotions in check"]
    },
    inspiration: {
        quotes: ["The best way to predict the future is to invent it.", "You miss 100% of the shots you don't take.", "Hard work beats talent when talent doesn’t work hard.", "Success is not final, failure is not fatal: It is the courage to continue that counts.", "Keep going, you're closer than you think."],
        actions: ["take a walk in nature", "start a new hobby", "call someone you care about", "write down your goals", "try something outside your comfort zone"],
        affirmations: ["You are capable of amazing things.", "You are stronger than you think.", "You can handle anything that comes your way.", "You deserve happiness and success.", "You are enough just as you are."]
    },
    nonsense_jokes: {
        setups: ["Why did the scarecrow win an award?", "How does a penguin build its house?", "Why don’t skeletons fight each other?", "What do you call cheese that isn't yours?", "Why couldn’t the bicycle stand up by itself?"],
        punchlines: ["Because he was outstanding in his field!", "Igloos it together!", "They don’t have the guts.", "Nacho cheese!", "It was two-tired!"]
    },
    travel_ideas: {
        destinations: ["Paris", "Tokyo", "New York", "Sydney", "Cape Town", "Reykjavik", "Machu Picchu", "Rome"],
        activities: ["visit a local market", "explore ancient ruins", "try a new cuisine", "take a scenic hike", "enjoy a cultural festival"],
        tips: ["pack light and travel smart", "learn a few local phrases", "respect local customs", "always keep your passport safe", "try to blend in like a local"]
    }
};

// Function to generate a random message based on category
function generateMessage(category) {
    if (!categories[category]) {
        return "Invalid category! Please choose from: astrology, inspiration, nonsense_jokes, or travel_ideas.";
    }

    if (category === "astrology") {
        const sign = randomChoice(categories.astrology.signs);
        const prediction = randomChoice(categories.astrology.predictions);
        const advice = randomChoice(categories.astrology.advice);
        return `${sign}: ${prediction}. Remember, ${advice}.`;
    } else if (category === "inspiration") {
        const quote = randomChoice(categories.inspiration.quotes);
        const action = randomChoice(categories.inspiration.actions);
        const affirmation = randomChoice(categories.inspiration.affirmations);
        return `Quote of the day: '${quote}'\nAction: ${action}.\nAffirmation: ${affirmation}.`;
    } else if (category === "nonsense_jokes") {
        const setup = randomChoice(categories.nonsense_jokes.setups);
        const punchline = randomChoice(categories.nonsense_jokes.punchlines);
        return `${setup}\n${punchline}`;
    } else if (category === "travel_ideas") {
        const destination = randomChoice(categories.travel_ideas.destinations);
        const activity = randomChoice(categories.travel_ideas.activities);
        const tip = randomChoice(categories.travel_ideas.tips);
        return `Destination: ${destination}. Activity: ${activity}. Travel Tip: ${tip}.`;
    }
}

// Helper function to pick a random element from an array
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Main program loop
function main() {
    console.log("Welcome to the Message Generator!");
    console.log("Categories: astrology, inspiration, nonsense_jokes, travel_ideas");

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function promptUser() {
        readline.question("Choose a category (or type 'exit' to quit): ", (category) => {
            category = category.trim().toLowerCase();
            if (category === "exit") {
                console.log("Goodbye!");
                readline.close();
                return;
            }

            const message = generateMessage(category);
            console.log("\nYour message:\n", message);
            console.log("\n-----------------------------\n");
            promptUser();
        });
    }
    promptUser();
}

main();