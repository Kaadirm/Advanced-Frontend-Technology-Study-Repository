import HeaderBox from '@/components/HeaderBox';
import React from 'react';
import TotalBalanceBox from './../../components/TotalBalanceBox';

const Home = () => {
    const loggedIn = { firstName: 'Kadir' };
    return (
        <div className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox />
                </header>
            </div>
        </div>
    );
};

export default Home;
