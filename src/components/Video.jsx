

export const Video = () => {
    return (
        <div className='video'>
            <div className='text'>
                <div className='icon'>*</div>
                Подробнее о профессии
                копирайтера смотри
                в видео. На примерах
                показываю, что делает
                копирайтер, — и за что
                ему платят деньги.
            </div>
            <div className='video-wrapper'>
                <iframe width="725" height="408"
                        src="https://www.youtube-nocookie.com/embed/L6Hby52EQXQ?si=BKjTLgZM3HmKQQ8A"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}