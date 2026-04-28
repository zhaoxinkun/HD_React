import {Link} from "@tanstack/react-router"

export const Navbar = () => {
    return (
        <header>
            <div className="bg-white flex items-center justify-center">
                <div className=" max-w-6xl w-full bg-sky-500 h-16 flex items-center gap-6">
                    <Link className="uppercase" to="/"> Jack.com</Link>
                    <Link to="/topic">我的文档</Link>
                    <Link to="/live">直播导航</Link>
                </div>
            </div>
        </header>
    );
};
