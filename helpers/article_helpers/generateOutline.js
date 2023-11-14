import { generateContent } from "../../../dataSources/externalAPI";
// import { generateKeywords } from "../generateKeywords";

export default async function generateOutline(
  topic,
  tone,
  keywords,
  userSubscriptionLevel,
  desiredWordCount
) {
  if (!topic) {
    throw new Error("Topic is required");
  }

  if (!tone) {
    throw new Error("Tone is required");
  }

  if (!desiredWordCount || desiredWordCount <= 0) {
    throw new Error("Desired word count must be a positive number");
  }

  // Step 2: If keywords are not provided, generate them.
  if (!keywords || keywords.trim() === "") {
    const prompt = `Provide 75 keywords related to the topic: ${topic}`;
    keywords = await generateContent(prompt, null, userSubscriptionLevel);
  }

  // Step 3: Clean and process the keywords.
  keywords = cleanAndProcessKeywords(keywords);

  // Step 4: Send the cleaned keywords, topic, and tone to generate the article outline.
  const articleOutlinePrompt = createArticleOutlinePrompt(
    topic,
    tone,
    keywords,
    desiredWordCount
  );
  const articleOutline = await generateContent(
    articleOutlinePrompt,
    null,
    userSubscriptionLevel
  );

  return articleOutline;
}

function cleanAndProcessKeywords(keywords) {
  return keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter((keyword) => keyword !== "")
    .join(", ");
}

function createArticleOutlinePrompt(topic, tone, keywords, desiredWordCount) {
  let complexity = "simple";

  if (desiredWordCount > 3000) {
    complexity = "complex";
  } else if (desiredWordCount > 2000) {
    complexity = "moderate";
  }

  return `Create a ${complexity} detailed outline for an article about "${topic}" using a ${tone} tone. Please include H2 and H3 headings and short descriptions for each section. Focus on including these keywords: ${keywords}. The article should be around ${desiredWordCount} words long.`;
}
