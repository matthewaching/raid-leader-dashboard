import NextAuth from "next-auth";
import BattleNet, { BattleNetIssuer } from 'next-auth/providers/battlenet';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [BattleNet({ authorization: { params: { state: process.env.AUTH_SECRET } }, issuer: process.env.AUTH_BATTLENET_ISSUER as BattleNetIssuer })],
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.id = user.id;
            }
            return token;
        },
        session({ session, token }) {
            session.user.id = token.id as string;
            return session;
        },
    },
});