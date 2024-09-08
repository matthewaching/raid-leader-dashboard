import React from 'react';
// import { auth } from '../../auth';

const CharacterModel = async () => {
    // const sessionData = await auth();
    const data = await fetch('https://oauth.battle.net/userinfo');
    const model = await data.json();

    return (
        <div>{model}</div>
    );
};

export default CharacterModel;