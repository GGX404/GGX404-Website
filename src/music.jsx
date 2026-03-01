import Footer from "./footer";
import Nav from "./nav";
const Music = () => {
    return (
        <div className='flex flex-col items-center text-center bg-gradient-to-br from-gray-950 to-gray-800 text-gray-100 h-full lg:h-screen '>
            <div className="relative pt-20 items-center flex flex-col">
                <Nav />
                <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-300">Music</h1>
                {/* before you ask, yes this was vibe coded. I am not about to spend 10 hours coding a fucking table */}
                <div class="max-w-4xl mx-auto mt-8 border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div class="px-6 py-4 border-b border-slate-200">
                        <h2 class="text-3xl font-bold text-slate-200 tracking-tight">Top 5 Songs of All Time </h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100">
                                    <th class="py-4 px-6 font-semibold w-16">Pos</th>
                                    <th class="py-4 px-6 font-semibold">Track</th>
                                    <th class="py-4 px-6 font-semibold">Artist</th>
                                    <th class="py-4 px-6 font-semibold">Album</th>
                                    <th class="py-4 px-6 font-semibold text-center">Trend</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                <tr class="hover:bg-slate-800 transition-colors group">
                                    <td class="py-5 px-6 font-black text-yellow-300 text-lg">01</td>
                                    <td class="py-5 px-6">
                                        <span class="block font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">SAFETY</span>
                                    </td>
                                    <td class="py-5 px-6 text-slate-300 font-medium">J. Cole</td>
                                    <td class="py-5 px-5">
                                        <img src="./resources/albums/TheFallOff.png" alt="Album Cover" class="w-16 h-16 rounded-md shadow-lg border border-zinc-700 object-cover group-hover:scale-105 transition-transform" />
                                    </td>
                                    <td class="py-5 px-6 text-center text-green-500 font-bold">↑</td>
                                </tr>
                                <tr class="hover:bg-slate-800 transition-colors group">
                                    <td class="py-5 px-6 font-black text-slate-400 text-lg">02</td>
                                    <td class="py-5 px-6 text-slate-400 font-bold group-hover:text-slate-300">Ghetto Symphony</td>
                                    <td class="py-5 px-6 text-slate-300 font-medium">A$AP Rocky</td>
                                    <td class="py-5 px-5">
                                        <img src="./resources/albums/Long-live-asap.jpg" alt="Album Cover" class="w-16 h-16 rounded-md shadow-lg border border-zinc-700 object-cover group-hover:scale-105 transition-transform" />
                                    </td>
                                    <td class="py-5 px-6 text-center text-green-500 font-bold">↑</td>
                                </tr>
                                <tr class="hover:bg-slate-800 transition-colors group">
                                    <td class="py-5 px-6 font-black text-amber-700 text-lg">03</td>
                                    <td class="py-5 px-6 text-amber-700 font-bold group-hover:text-amber-600">30 Hours</td>
                                    <td class="py-5 px-6 text-slate-300 font-medium">Kanye West</td>
                                    <td class="py-5 px-5">
                                        <img src="./resources/albums/The_life_of_pablo.jpg" alt="Album Cover" class="w-16 h-16 rounded-md shadow-lg border border-zinc-700 object-cover group-hover:scale-105 transition-transform" />
                                    </td>
                                    <td class="py-5 px-6 text-center text-red-400">↓</td>
                                </tr>
                                <tr class="hover:bg-slate-800 transition-colors group">
                                    <td class="py-5 px-6 font-black text-slate-400 text-lg">04</td>
                                    <td class="py-5 px-6 text-slate-300 font-bold">Fine Whine</td>
                                    <td class="py-5 px-6 text-slate-300 font-medium">A$AP Rocky</td>
                                    <td class="py-5 px-5">
                                        <img src="./resources/albums/AtLongLastASAP.jpg" alt="Album Cover" class="w-16 h-16 rounded-md shadow-lg border border-zinc-700 object-cover group-hover:scale-105 transition-transform" />
                                    </td>
                                    <td class="py-5 px-6 text-center text-green-500">↑</td>
                                </tr>
                                <tr class="hover:bg-slate-800 transition-colors group">
                                    <td class="py-5 px-6 font-black text-slate-400 text-lg">05</td>
                                    <td class="py-5 px-6 text-slate-300 font-bold">Life Of The Party</td>
                                    <td class="py-5 px-6 text-slate-300 font-medium">Kanye West & Andre 3000</td>
                                    <td class="py-5 px-5">
                                        <img src="./resources/albums/ts-why.png" alt="Album Cover" class="w-16 h-16 rounded-md shadow-lg border border-zinc-700 object-cover group-hover:scale-105 transition-transform" />
                                    </td>
                                    <td class="py-5 px-6 text-center text-slate-300">—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Music;