import { Link } from "react-router-dom"

export const NavbarDropdown = ({ group }) => {
    return (
        <>
            {group === 'books' ? (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 z-10 w-full space-y-2 bg-light-50 border-t rounded shadow-lg transition-all duration-300 ease-in-out">
                    <div className="px-12 py-6 grid grid-cols-4 gap-6">
                        <div>
                            <h2 >
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Best Sellers</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Top Picks</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">New Releases</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Award Winners</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Popular Authors</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Trending Now</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Must-Reads</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <Link to="#" className="font-bold text-primary-800 hover:text-primary-900">Local Favorites</Link>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                                <li className="font-normal">
                                    <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : group === 'categories' ? (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 z-10 w-full space-y-2 bg-light-50 border-t rounded shadow-lg transition-all duration-300 ease-in-out">
                    <div className="px-12 py-6 grid grid-rows-2 gap-6">
                        <div>
                            <h2 className="font-bold text-primary-800">Categories</h2>
                            <div className="grid grid-cols-4 gap-6 mt-3">
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-primary-800">Genres</h2>
                            <div className="grid grid-cols-4 gap-6 mt-3">
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                    <li className="font-normal">
                                        <Link to="#" className="hover:border-b hover:text-primary-800 border-primary-800">Books 1</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}