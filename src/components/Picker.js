
const Picker = ({ sounds, selected, setSelected, setSounds }) => {

    // select sound and add it to state
    const toggleSelected = (sound) => {
        let audio = sound.sound
        // if sound is already selected, remove it from selected array and stop playing
        if (selected.map(sel => sel).indexOf(sound) > -1) {
            let tmpSelected = selected.map(sel => sel)
            let soundToCut = tmpSelected.map(sound => sound).find(s => s === sound)
            tmpSelected.splice(tmpSelected.indexOf(soundToCut), 1)
            setSelected(tmpSelected)
            let tmpSounds = sounds.map(sound => sound)
            let soundToReplace = tmpSounds.map(sound => sound).find(s => s === sound)
            soundToReplace.isPlaying = false
            tmpSounds.splice(tmpSounds.indexOf(soundToReplace), 1, soundToReplace)
            setSounds(tmpSounds)
            audio.pause()
            audio.currentTime = 0
        } else {
            // if sound isn't already selected, change isPlaying to true, push to state, and play
            let tmpSounds = sounds.map(sound => sound)
            let soundToPlay = tmpSounds.map(sound => sound).find(s => s === sound)
            soundToPlay.isPlaying = true
            tmpSounds.splice(tmpSounds.indexOf(soundToPlay), 1, soundToPlay)
            setSounds(tmpSounds)
            let tmpSelected = selected.map(sel => sel)
            tmpSelected.push(sound)
            setSelected(tmpSelected)
            audio.play()
            audio.addEventListener("ended", function(){
                audio.currentTime = 0
                audio.play()
            })
        }
    }

    return (
        <div className="Picker">
                                <p tabIndex="0" className="visually-hidden">Select sounds to hear.</p>
            {/* map over array of sounds and give custom id attribute if it is currently selected to play */}
            {sounds.map((sound, idx) => {
                return (
                    <section key={idx}>
                        {sound.isPlaying === true ? 
                        (<button tabIndex="0" id="selected" onClick={() => {toggleSelected(sound)}}>{sound.title}</button>)
                        : 
                        (<button tabIndex="0" onClick={() => {toggleSelected(sound)}}>{sound.title}</button>)
                        }
                    </section>
                )
            })}
        </div>
    )
}

export default Picker;