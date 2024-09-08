'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import CharacterModel from './CharacterModel';

const HomePage = () => {
    const { data: session } = useSession();

    if (!session) {
        return <button onClick={() => signIn()}>Login</button>;
    }

    return (
        <div>
            <CharacterModel />
        </div>
    )
}

export default HomePage;