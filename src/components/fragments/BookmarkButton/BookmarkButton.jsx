import { useEffect, useState } from "react";

const BookmarkButton = (props) => {
    const {slug} = props;
    const [isAnimeBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        setIsBookmarked(isBookmarked(slug));
    }, [slug]);

    const isBookmarked = (slug) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

        return bookmarks.includes(slug);
    }

    const toggleBookmark = (slug) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

        const updatedBookmarks = isBookmarked(slug) ? bookmarks.filter((bookmark) => bookmark !== slug) : [...bookmarks, slug];

        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
        setIsBookmarked(!isAnimeBookmarked);
    }
    
    return(
        <>
            <button onClick={() => toggleBookmark(slug)} className="w-full mt-2">
                {isAnimeBookmarked ? <p className="text-KUMANIME font-semibold text-xs px-3 py-2 border-2 border-KUMANIME text-center uppercase"><i className="fa-solid fa-bookmark text-KUMANIME text-base px-1"></i> Remove From Watchlist</p> : <p className="text-KUMANIME font-semibold px-3 py-2 border-2 border-KUMANIME text-xs  text-center uppercase"><i className="fa-regular fa-bookmark text-KUMANIME text-base px-1"></i> Add To Watchlist</p>}
            </button>
        </>
    );
}

export default BookmarkButton;