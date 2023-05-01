import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "cdbda468d1e40b2bfb97" || process.env.GITHUB_ID,
      clientSecret:
        "604e680a93dd90ace73b1225d8e7a5135d58941e" || process.env.GITHUB_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);