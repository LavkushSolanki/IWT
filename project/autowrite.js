const quotes = [
  "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable. —John Wooden",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.  —Steve Jobs",
  "Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan 'Press On' has solved and always will solve the problems of the human race. —Calvin Coolidge",
  "If you hear a voice within you say 'you cannot paint,' then by all means paint, and the voice will be silenced. —Vincent Van Gogh",
];

const typingSpeed = 37; // Speed of typing in ms
const erasingSpeed = 21; // Speed of erasing in ms
const delayBetweenQuotes = 600; // Delay before starting the next quote

let quoteIndex = 0;
let charIndex = 0;
let isErasing = false;

const quoteContainer = document.getElementById("quote-text");

function typeQuote() {
  if (!isErasing && charIndex < quotes[quoteIndex].length) {
    // Add characters one by one
    quoteContainer.textContent += quotes[quoteIndex][charIndex];
    charIndex++;
    setTimeout(typeQuote, typingSpeed);
  } else if (isErasing && charIndex > 0) {
    // Remove characters one by one
    quoteContainer.textContent = quotes[quoteIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeQuote, erasingSpeed);
  } else {
    isErasing = !isErasing;

    if (!isErasing) {
      // Move to the next quote
      quoteIndex = (quoteIndex + 1) % quotes.length;
      setTimeout(typeQuote, delayBetweenQuotes);
    } else {
      setTimeout(typeQuote, 500); // Short delay before erasing
    }
  }
}

// Start typing quotes
typeQuote();
