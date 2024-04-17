import './MainPage.scss'
import { Navbar } from '../../components/NavBar/NavBar'
import { FollowersListBar } from '../../components/FollowersList/FollowersList'
import { WhatsNew } from '../../components/WhatsNew/WhatsNew'
import { History } from '../../components/HistoryMain/History'
import { PostLinked } from '../../components/PostLinked/PostLinked'
import { PostRepost } from '../../components/PostRepost/PostRepost'
import { ListFriends } from '../../components/ListFriends/ListFriends'
import { MusicBlock } from '../../components/MusicBlock/MusicBlock'
import { Header } from '../../components/UI/Header/Header'

export const MainPage = () => {
	return (
		<div className='MainPage'>
			<Header />
			<aside className='LeftSide'>
				<Navbar />
				<FollowersListBar />
			</aside>
			<main className='Main'>
				<WhatsNew />
				<History />
				<PostLinked />
				<PostRepost />
			</main>
			<aside className='RightSide'>
				<ListFriends />
				<MusicBlock />
			</aside>
		</div>
	)
}
