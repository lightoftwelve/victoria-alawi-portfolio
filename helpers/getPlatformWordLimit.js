const PLATFORM_LIMITS = {
  Facebook: { max: 63206, short: 200, medium: 750, long: 1500 },
  Instagram: { max: 63206, short: 200, medium: 750, long: 1500 },
  Pinterest: { max: 500, short: 100, medium: 250, long: 450 },
  LinkedIn: { max: 3000, short: 100, medium: 750, long: 1400 },
  Twitter: { max: 280, short: 50, medium: 140, long: 260 },
  TwitterNotes: { max: 4000, short: 200, medium: 750, long: 1400 },
  TikTok: { max: 4000, short: 200, medium: 750, long: 1400 },
};

function getPlatformWordLimit(platform, length) {
  if (!PLATFORM_LIMITS[platform]) {
    throw new UserInputError("Invalid platform specified.");
  }
  return PLATFORM_LIMITS[platform][length];
}

function appendFeaturesToContent(content, features) {
  if (features.hashtags) {
    content += `\n\n${features.hashtags.join(" ")}`;
  }
  if (features.CTAs) {
    content += `\n\n${features.CTAs.join(". ")}.`;
  }
  if (features.mentions) {
    content += `\n\n${features.mentions.join(" ")}`;
  }
  return content;
}
