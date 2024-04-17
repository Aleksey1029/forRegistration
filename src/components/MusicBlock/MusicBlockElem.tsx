type MusicBlockElem = {
	mainText: string
	imgLink: string
	secondaryText: string
	buttonClass: string
}

export const MusicElem = ({
	imgLink,
	mainText,
	secondaryText,
	buttonClass,
}: MusicBlockElem) => {
	return (
		<div className='MusicElem'>
			<img src={`./img/music/album-${imgLink}.png`} alt='Album' />
			<div className='music__description'>
				<p className='main__text'>{mainText}</p>
				<p className='secondary__text'>{secondaryText}</p>
			</div>
			<div className={`plus-button ${buttonClass}`}></div>
		</div>
	)
}
