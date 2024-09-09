'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';

const LoginWrapper = ({ children }: React.PropsWithChildren) => {
    const { data: session } = useSession();

    console.log(session);

    if (!session) {
        return <button onClick={() => signIn()}>Login</button>;
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default LoginWrapper;