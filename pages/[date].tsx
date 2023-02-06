import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import useJunks from "@/hooks/use-junks";
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export default function Diary() {
    const router = useRouter();
    const [date, setDate] = useState<Date>();
    const { junks, isLoading } = useJunks(date);
    useEffect(() => {
        const { date } = router.query as { date: string; }
        setDate(new Date(date));
    }, [router.query]);
    const getIndex = () => {
        let indexes: string[] = [];
        junks.forEach(({index}) => {
            indexes.push(...index);
        });
        return indexes;
    }

    return (
        <Fragment>
            <Head>
                <title>Diary page</title>
            </Head>
            <main
                style={poppins.style}
                className="grid grid-cols-with-sidebar h-[100vh] w-full bg-pale-white text-dark-blue"
            >
                <section className="flex flex-col gap-3 items-center mr-1 overflow-y-scroll p-3" id="diary-page">
                    <form>
                        <input type="date" onChange={(e) => {
                            console.log(e.target.value);
                            router.push(`/${e.target.value}/`)
                        }} />
                    </form>
                    {junks.map(({dateAdded ,title, story, index}, i) => (
                        <article key={i} className="w-[90%] p-3 flex flex-col gap-2 bg-[#e0e1e9] rounded-md">
                            <header className="flex flex-col gap-1">
                                <time 
                                    dateTime={dateAdded.toDateString()}
                                    className="font-bold text-sm"
                                >
                                    {dateAdded.toDateString()}
                                </time>
                                <h2 className="font-bold text-center text-2xl">{title}</h2>
                            </header>
                            <p className="w-full break-words text-lg">{story}</p>
                            <footer>
                                <ul className="flex flex-row gap-1">
                                    {index.map((item, i) => (
                                        <li key={i} className="text-dark-blue font-semibold">{"#".concat(item)}</li>
                                    ))}
                                </ul>
                            </footer>
                        </article>
                    ))}
                </section>
                <aside id="index" className="p-3 flex flex-col gap-2">
                    <h1 className="flex flex-col text-3xl font-medium text-center underline">Index</h1>
                    <ul>
                        {getIndex().map((index, i) => (
                            <li className="text-lg font-bold" key={i}>{`#${index}`}</li>
                        ))}
                    </ul>
                </aside>
            </main>
        </Fragment>
    )
}