import React from 'react';
import { userAuthentication } from '../config/userAuthentication';
import HomeStack from './HomeStack';
import WelcomeStack from './WelcomeStack';

export default function RootNavigation() {
    const { user } = userAuthentication();

    return user ? <HomeStack /> : <WelcomeStack />
}

