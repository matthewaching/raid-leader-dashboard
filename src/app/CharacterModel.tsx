import React from 'react';
import { auth } from '../../auth';

const CharacterModel = async () => {
    const session = await auth();
    // const data = await fetch('https://oauth.battle.net/userinfo', {
    //     headers: { "Authorization": `Bearer ${session?.accessToken}` }
    // });

    const data = await fetch('https://us.api.blizzard.com/profile/user/wow', {
        headers: {
            "Authorization": `Bearer ${session?.accessToken}`,
            "Battlenet-Namespace": 'profile-us',
        },
    });

    console.log(session?.accessToken);
    // console.log(data);
    // const model = await data.json();

    // console.log(model);
    return (
        <div>Thinking...</div>
    );
};

export default CharacterModel;