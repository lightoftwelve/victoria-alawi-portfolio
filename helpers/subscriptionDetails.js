import { User } from "../../models/User";

export default async function subscriptionDetails(userId) {
  try {
    const user = await User.findById(userId).populate("subscription");
    if (!user) {
      throw new Error("User not found");
    }
    if (!user.subscription) {
      throw new Error("Subscription details not found");
    }

    const { subscription } = user;
    const articleCount = user.articleCount;

    return {
      subscription: subscription,
      wordLimit: subscription.wordLimit,
      articleLimit: subscription.maxArticles,
      articleCount,
      remainingArticles: subscription.maxArticles - articleCount,
    };
  } catch (error) {
    console.error("Error fetching user subscription details:", error);
    throw error;
  }
}
