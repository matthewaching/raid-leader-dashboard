import NextAuth from "next-auth";
import BattleNet, { BattleNetIssuer } from 'next-auth/providers/battlenet';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [BattleNet({ authorization: { params: { state: process.env.AUTH_SECRET } }, issuer: process.env.AUTH_BATTLENET_ISSUER as BattleNetIssuer })],
    callbacks: {
        jwt({ token, account }) {
            if (account?.provider === 'battlenet') {
                return { ...token, accessToken: account.access_token }
            }

            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string;

            return session;
        }
    },
    session: {
        strategy: 'jwt',
    },
});