// Helper function to generate keywords for a topic
export default async function generateKeywords(topic) {
  const prompt = `List 75 keywords related to the topic: ${topic}`;
  const keywords = await generateContent(prompt, 500, "standard"); // assuming a fixed word limit for keyword generation
  return keywords.split(","); // assuming the response is comma-separated
}

// Main Article Generation Function
async function generateArticle(
  topic,
  userProvidedKeywords,
  userSubscriptionLevel
) {
  let keywords = userProvidedKeywords;

  // If user didn't provide keywords, generate them
  if (!keywords || keywords.length === 0) {
    keywords = await generateKeywords(topic);
  }

  // Construct the main article prompt using topic & keywords
  const articlePrompt = `Write an article on the topic "${topic}" using the following keywords: ${keywords.join(
    ", "
  )}.`;

  const wordLimit = SUBSCRIPTION_LIMITS[userSubscriptionLevel];

  // Generate the article content based on the constructed prompt
  const articleContent = await generateContent(
    articlePrompt,
    wordLimit,
    userSubscriptionLevel
  );

  return articleContent;
}
