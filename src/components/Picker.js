
const Picker = ({ sounds, selected, setSelected, setSounds }) => {

    const toggleSelected = (sound) => {
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
        } else {
            let tmpSounds = sounds.map(sound => sound)
            let soundToReplace = tmpSounds.map(sound => sound).find(s => s === sound)
            soundToReplace.isPlaying = true
            tmpSounds.splice(tmpSounds.indexOf(soundToReplace), 1, soundToReplace)
            setSounds(tmpSounds)
            let tmpSelected = selected.map(sel => sel)
            tmpSelected.push(sound)
            setSelected(tmpSelected)
        }
    }

    return (
        <div className="Picker">
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