import { MusicElem } from './MusicBlockElem'
import { Heading } from '../Typography/AppHeading/AppHeading'
import { data } from './data'

export const MusicBlock = () => {
	return (
		<div className='MusicBlock'>
			<div className='MusicBlock__title'>
				<Heading headingText={'Вы недавно слушали'} headingType={'h2'} />
				<span>{data.length}</span>
			</div>
			{data &&
				data.map(elem => (
					<MusicElem
						imgLink={elem.imgLink}
						mainText={elem.mainText}
						secondaryText={elem.secondaryText}
						buttonClass={elem.buttonClass}
					/>
				))}
		</div>
	)
}
