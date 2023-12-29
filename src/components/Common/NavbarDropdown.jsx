export const NavbarDropdown = ({ group }) => {
    return (
        <>
            {group === 'books' ? (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 z-10 w-full space-y-2 bg-alabaster-50 border-t rounded shadow-lg transition-all duration-300 ease-in-out">
                    <div className="px-12 py-6 grid grid-cols-4 gap-6">
                        <div>
                            <h2 >
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Best Sellers</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Top Picks</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">New Releases</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Award Winners</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Popular Authors</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Trending Now</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Must-Reads</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2>
                                <a href="#" className="font-bold text-cerulean-blue-800 hover:text-cerulean-blue-900">Local Favorites</a>
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                                <li className="font-normal">
                                    <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : group === 'categories' ? (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 z-10 w-full space-y-2 bg-alabaster-50 border-t rounded shadow-lg transition-all duration-300 ease-in-out">
                    <div className="px-12 py-6 grid grid-rows-2 gap-6">
                        <div>
                            <h2 className="font-bold text-cerulean-blue-800">Categories</h2>
                            <div className="grid grid-cols-4 gap-6 mt-3">
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-cerulean-blue-800">Genres</h2>
                            <div className="grid grid-cols-4 gap-6 mt-3">
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
                                    </li>
                                    <li className="font-normal">
                                        <a href="#" className="hover:border-b hover:text-cerulean-blue-800 border-cerulean-blue-800">Books 1</a>
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