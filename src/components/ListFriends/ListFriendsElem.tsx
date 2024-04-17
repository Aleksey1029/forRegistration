type ListFriendsElem = {
	mainText: string
	secondaryText: string
	badge: number
}

export const ListFriendElem = ({
	badge,
	mainText,
	secondaryText,
}: ListFriendsElem) => {
	return (
		<div className='UserElem'>
			<img src='./img/users/aleksandr-maykov.jpeg' alt='User' />
			<div className='user__description'>
				<p className='main__text'>{mainText}</p>
				<p className='secondary__text _online'>{secondaryText}</p>
			</div>
			<span className='Badge'>{badge}</span>
		</div>
	)
}
