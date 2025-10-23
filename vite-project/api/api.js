export async function getQuote() {
  try {
    const response = await fetch('/api/quotes');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    // ZenQuotes returns an array like [{ q: "...", a: "..." }]
    // Return the first element so App can read loadQuote.q
    return data[0];
  } catch (error) {

    console.error('getQuote failed:', error);
    throw error;
  }
}
