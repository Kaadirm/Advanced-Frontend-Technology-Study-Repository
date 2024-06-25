import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ user }: SiderbarProps) => {
    return (
        <aside className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="mb-12 cursor-pointer items-center gap-2"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
