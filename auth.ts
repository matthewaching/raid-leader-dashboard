import NextAuth from "next-auth";
import BattleNet, { BattleNetIssuer } from 'next-auth/providers/battlenet';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [BattleNet({ authorization: { params: { state: process.env.AUTH_SECRET } }, issuer: process.env.AUTH_BATTLENET_ISSUER as BattleNetIssuer })],
});