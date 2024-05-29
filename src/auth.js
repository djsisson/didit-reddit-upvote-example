import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { db } from "./db";

export const { auth, handlers, signOut, signIn } = NextAuth({
  adapter: PostgresAdapter(db),
  providers: [
    GitHubProvider({
      client: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  trustHost: true,
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
});
