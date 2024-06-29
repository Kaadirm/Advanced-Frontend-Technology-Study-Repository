import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from './../../components/RightSidebar';

const Home = () => {
    const loggedIn = {
        firstName: 'Kadir',
        lastName: 'MMS',
        email: 'kadir@gmail.com'
    };
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
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transaction={[]}
                banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
            />
        </div>
    );
};

export default Home;
