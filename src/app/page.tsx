import { SessionProvider } from "next-auth/react";
import CharacterModel from "./CharacterModel";
import LoginWrapper from "./LoginWrapper";

const Home = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <SessionProvider>
                <LoginWrapper>
                    <CharacterModel />
                </LoginWrapper>
            </SessionProvider>
        </div>
    );
};

export default Home;