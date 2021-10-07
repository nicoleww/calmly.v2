import { useState, useEffect, useRef } from "react"
import pause from "../assets/images/pause.png"
import play from "../assets/images/play.png"
import birdVid from "../assets/videos/birds.mp4"
import birdImg from "../assets/images/birds.jpg"


const Player = ({ sounds, selected, isMobile }) => {

    const [isPaused, setIsPaused] = useState(false)
    const [videoSrc, setVideoSrc] = useState(birdVid)
    const [imgSrc, setImgSrc] = useState(birdImg)
    const [imgAlt, setImgAlt] = useState("A small bird sitting on a tree branch.")
    const [selectedVid, setSelectedVid] = useState('')
    const vidRef = useRef(null)

    // play / pause video and set correlating icon
    const togglePause = () => {
        if (isPaused === false) {
            setIsPaused(true)
            vidRef.current.pause()
        } else if (isPaused === true) {
            setIsPaused(false)
            vidRef.current.play()
        }
    }

    // when user selects a video, assign it to vidSrc to play
    const handleVideoSelected = (sel) => {
        setSelectedVid(sel.name)
        setVideoSrc(sel.video)
    }

    // when selected array is changed, change vidSrc to appropriate video
    useEffect(() => {
        let play;
        if (selected.length === 1) {
            play = selected[0].video
            setVideoSrc(play)
        } else if (selected.length > 1) {
            const index = selected.length -1
            play = selected[index].video
            setVideoSrc(play)
        } else if (selected.length === 0) {
            vidRef.current.pause()
        }
    }, [selected])

    // when videoSrc is changed, display selected video
    useEffect(() => {
        vidRef.current.play()
    }, [videoSrc])

    // on window load, play current video
    useEffect(() => {
        vidRef.current.play()
    }, [])

    return (
        <div className="Player">
            {/* if being viewed on desktop sized screen, render video else render photo */}
            {isMobile === false ? 
            (
                <>
                {/* if more than one sound selected, render video feed options */}
                {selected.length > 1 ? 
                (
                    <>
                    <video ref={vidRef} src={videoSrc} muted loop></video>
                    <p tabIndex="0" className="visually-hidden">Select a video to display.</p>
                    <div className="select-video">
                        {selected.map(sel => <button id={`${sel.name === selectedVid ? "selected-vid" : ""}`} onClick={() => {handleVideoSelected(sel)}}>{sel.title}</button>)}
                    </div>
                    <button onClick={togglePause}>
                        {isPaused === false ? 
                        (<img src={pause} alt="Pause video." />)
                        :
                        (<img src={play} alt="Play video." />)
                        }
                    </button>
                    </>
                )
                :
                (
                    <>
                        <video ref={vidRef} src={videoSrc} muted loop></video>
                        <button onClick={togglePause}>
                            {isPaused === false ? 
                            (<img src={pause} alt="pause" />)
                            :
                            (<img src={play} alt="play" />)
                            }
                        </button>
                    </>
                )
                }
                </>
            ) 
            : 
            (
                <img src={birdImg} alt={imgAlt} />
            )
            }
        </div>
    )
}

export default Player;