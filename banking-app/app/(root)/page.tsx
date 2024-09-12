import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from './../../components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.action';
import { getAccounts } from '@/lib/actions/bank.action';
import RecentTransactions from './../../components/RecentTransactions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({
        userId: loggedIn.id
    });

    if (!accounts) return;

    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

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
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </header>
                <RecentTransactions />
            </div>
            <RightSidebar
                user={loggedIn}
                transaction={accounts?.transactions}
                banks={accountsData?.slice(0, 2)}
            />
        </div>
    );
};

export default Home;
