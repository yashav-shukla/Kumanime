import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { getAnimeDetails } from "../../Hooks/Api";
import TextDetail from "../../components/elements/TextDetail/TextDetail";
import Title from "../../components/elements/Title/Title";
import AnimeDetail from "../../components/fragments/AnimeDetail/AnimeDetail";
import BookmarkButton from "../../components/fragments/BookmarkButton/BookmarkButton";
import Loading from "../../components/layouts/Loading/Loading";
import { addToHistory } from "../../utils";

const Anime = () => {

    const { id } = useParams();
    const [animeDetails, setAnimeDetails] = useState();
    const [showFullSynopsis, setShowFullSynopsis] = useState(false);

    const toggleSynopsis = () => {
        setShowFullSynopsis(!showFullSynopsis);
    };

    useEffect(() => {
        async function animeDetails() {
            try {
                const result = await getAnimeDetails(id);
                setAnimeDetails(result);
            } catch (error) {
                console.log(error);
            }
        }

        animeDetails()
    }, [id])

    return (
        <>
            {animeDetails ? (
                <>
                    <Helmet>
                        <title>Nonton {animeDetails.title}</title>
                        <meta
                        name="description"
                        content="Tempat nonton anime subtitle Indonesia secara gratis diKUMANIME.FUN tanpa gangguan banner iklan yang banyak dan mengganggu."
                        />
                        <meta name="robots" content="index, follow" />
                        <meta
                        property="og:title"
                        content={`Nonton ${animeDetails.title}`}
                        />
                        <meta
                        property="og:description"
                        content="Tempat nonton anime subtitle Indonesia secara gratis diKUMANIME.FUN tanpa gangguan banner iklan yang banyak dan mengganggu."
                        />
                        <meta property="og:locale" content="id_ID" />
                        <meta property="og:type" content="article" />
                        <meta property="og:site_name" content="KUMANIME" />
                        <meta property="og:image" content="https://raw.githubusercontent.com/MastayY/KUMANIME/main/public/logo.png" />
                        <meta name="googlebot" content="index, follow" />
                        <meta name="twitter:title" content={`Nonton ${animeDetails.title}`} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="keywords" content="KUMANIME, otakudesu, kuronime, kuramanime, web streaming anime, moenime, moenime id, moenime list, moe anime, anime batch indonesia, anime batch sub indo, animebatch sub indo, anime batch terbaru, download anime batch subtitle indonesia, situs download anime, anime sub indo, download anime sub indo, download anime subtitle indonesia, download anime terbaru, download anime bd, download anime movie, download anime batch, download anime batch sub indo, download anime batch subtitle indonesia terlengkap, streaming anime, streaming anime sub indo, streaming anime subtitle indonesia, streaming anime sub indo lengkap" />
                        <meta name="twitter:description" content="Nonton Anime Online Sub Indo Gratis diKUMANIME.FUN" />
                        <meta
                        name="twitter:image"
                        content="https://raw.githubusercontent.com/MastayY/KUMANIME/main/public/logo.png"
                        />
                    </Helmet>
                    <div className="pb-10 pt-3 bg-bg-KUMANIME text-white">
                        <div className="px-16 grid relative lg:grid-cols-8 gap-4 place-content-center place-items-center bg-cover mb-10">
                            <div className="absolute blur-[20px] opacity-35 bg-cover w-full h-full bg-center" style={{backgroundImage: `url(${animeDetails.thumb})`}}></div>
                            <div className="anime-detail grid gap-5 md:grid-cols-5 md:mb-16 lg:col-span-6 py-16 place-items-center md:place-items-start relative">
                                <div className="md:col-span-2 lg:col-span-1 md:block flex justify-center flex-col items-center relative w-fit">
                                    <img src={animeDetails.thumb} alt={animeDetails.title} width="202" height="277" />
                                </div>
                                <div className="detail md:col-span-3 lg:col-span-4 text-center md:text-left">
                                    <h1 className="text-3xl font-bold">{animeDetails.title}</h1>
                                    <p className="text-gray-500 text-sm py-2">{animeDetails.japanase}</p>
                                    <div className="genres flex flex-wrap justify-center md:justify-normal">
                                        {animeDetails.genre_list?.map((genre, index) => (
                                            <p key={index} className="bg-KUMANIME uppercase font-semibold px-3 py-[2px] text-xs mr-1 my-1">
                                                {genre.genre_name}
                                            </p>
                                        ))}
                                    </div>
                                    <p className="py-1">
                                        {showFullSynopsis ? animeDetails.synopsis : animeDetails.synopsis.slice(0, 400)}
                                        {animeDetails.synopsis.length > 400 && (
                                        <span className="text-KUMANIME cursor-pointer" onClick={toggleSynopsis}>
                                            {showFullSynopsis ? ' - less' : ' + more'}
                                        </span>
                                        )}
                                    </p>
                                    <p className="mt-5"><span className="font-semibold">KUMANIME.FUN</span> merupakan situs tempat nonton anime <span className="font-semibold">{animeDetails.title}</span> subtitle indonesia secara gratis</p>
                                </div>
                            </div>
                            <AnimeDetail>
                                <TextDetail title="Judul Alternatif" content={animeDetails.japanase} />
                                <TextDetail title="Score" content={animeDetails.score} />
                                <TextDetail title="Type" content={animeDetails.type} />
                                <TextDetail title="Status" content={animeDetails.status} />
                                <TextDetail title="Total Episode" content={animeDetails.total_episode} />
                                <TextDetail title="Duration" content={animeDetails.duration} />
                                <TextDetail title="Release Date" content={animeDetails.release_date} />
                                <TextDetail title="Producer" content={animeDetails.producer} />
                                <TextDetail title="Studio" content={animeDetails.studio} />
                                <BookmarkButton slug={id} />
                            </AnimeDetail>
                        </div>
                        <div className="px-16">
                            <Title>Episode List</Title>
                            <ul className="w-full m-auto bg-bg-KUMANIME-2 overflow-y-auto max-h-[300px] rounded-md">
                                {
                                    animeDetails.episode_list.map((data, index) => {
                                        return(
                                            <li key={index}>
                                                <a href={`/watch/${data.id}`} className="block p-2 hover:bg-bg-KUMANIME-semi transition-all font-semibold" onClick={() => addToHistory(id, data.id, data.title.match(/Episode (\d+)/)[1])}>{data.title}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </>
            ) : <Loading /> }
        </>
    )
}

export default Anime;