import { Heading } from '../Typography/AppHeading/AppHeading'
import { ListFriendElem } from './ListFriendsElem'
import { data } from './data'

export const ListFriends = () => {
	return (
		<div className='List'>
			<div className='List__title'>
				<Heading headingText={'Близкие друзья'} headingType={'h2'} />
				<span className='count'>{data.length}</span>
			</div>
			{data &&
				data.map(elem => (
					<ListFriendElem
						mainText={elem.mainText}
						secondaryText={elem.secondaryText}
						badge={elem.badge}
					/>
				))}
		</div>
	)
}
