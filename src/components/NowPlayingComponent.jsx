import '../css/App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';

// SoundCloud Resolver to fetch track and track metadata
async function resolveSoundCloud (url) {
    const oembedUrl = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(url)}`;
    const res = await fetch(oembedUrl);
    if (!res.ok) throw new Error('Could not resolve SoundCloud URL');
    const data = await res.json();

    // This constructs the metadata to display
    // Soundcloud returns a "title" string, usually in "Artist — Track" or "Track by Artist"
    let title = data.title || 'Untitled Track';
    let track = title;
    let artist = data.artist || 'Unknown Artist';

    if (title.includes(' — ')) {
        const [a, t] = title.split(' — ');
        artist = a?.trim() || artist;
        track = t?.trim() || track;
    } else if (title.includes(' by ')) {
        const [t, a] = title.split(' by ');
        track = t?.trim() || track;
        artist = a?.trim() || artist;
    }

    // Build an embeddable url
    const src = new URL('https://w.soundcloud.com/player/');
    src.searchParams.set(
        'url',
        encodeURIComponent(url)
    );

    // Configure SoundCloud player to autoplay
    src.searchParams.set('auto_play', 'true');

    return {
        embedSrc: src.toString(),
        track,
        artist,
        thumbnailHtml: data.html, // unused but kept for future
    };
}

function NowPlaying() {
    // Set the SoundCloud URL to play
    const soundcloudUrl = 'https://soundcloud.com/grumpiestcub/phone_call?in=grumpiestcub/sets/mischief';

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const [meta, setMeta] = useState({
        title,
        artist,
    });

    const [embedSrc, setEmbedSrc] = useState(null);
    const [error, setError] = useState(null);
    const frameRef = useRef(null);

    // Draggable position
    const nowPlayingPos = useSpring({x: 0, y: 0})
    const bindNowPlayingPos = useDrag((params) => {
        nowPlayingPos.x.set(params.offset[0]);
        nowPlayingPos.y.set(params.offset[1])
    });

    // Resolve SoundCloud URL when provided
    useEffect(() => {
        async function load() {
            if (!soundcloudUrl) {
                return;
            }
            try {
                const info = await resolveSoundCloud(soundcloudUrl);
                setEmbedSrc(info.embedSrc);
                setMeta({
                    title: info.track || 'untitled track',
                    artist: info.artist || 'unknown',
                });
            } catch (error) {
                setError(error);
                setEmbedSrc(null);
                setMeta({
                    title: title || 'untitled track',
                    artist: artist || 'unknown',
                });
            }
        }
        load();
    }, [soundcloudUrl, title, artist]);

    // Prepare hidden iframe style
    const iframeStyle = useMemo(
        () => ({
            position: 'fixed',
            width: 0,
            height: 0,
            opacity: 0,
            pointerEvents: 'none',
            border: '0',
        }),
        []
    );

    return (
        <div className="">
            <animated.div
                {...bindNowPlayingPos()}
                className="nowPlayingContainer"
                style={{ x: nowPlayingPos.x, y: nowPlayingPos.y }}
            >
          <span className="nowPlayingMeta">
              <span className="nowPlayingLabel">
                {error ? 'error' : 'now playing'}
              </span>
              <span className="nowPlayingTitle">
                  {error ? 'cannot load track' : ` ${meta.title}`}
              </span>
              <span className="nowPlayingArtist">
                  {error ? '' : ` by ${meta.artist}`}
              </span>
          </span>
            </animated.div>

            {/* Hidden SoundCloud player (audio only) */}
            {embedSrc && (
                <iframe
                    ref={frameRef}
                    title="SoundCloud Player"
                    allow="autoplay"
                    style={iframeStyle}
                    src={embedSrc}
                />
            )}
        </div>
    );
}

export default NowPlaying;
