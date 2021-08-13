import styled from 'styled-components'

const StyledMenu = styled.div`
	position: fixed;
    right: 0;
    right: ${(props) => (props.open ? 0 : '-100%')};
	top: 0;
	background-image: linear-gradient(to left, black 75%, transparent);
	height: 100vh;
    width: 80%;
	z-index: 10;
	transition: right 500ms;
	#header {
		height: 60px;
		display: flex;
		align-items: center;
		padding: 0 1rem;
		justify-content: flex-end;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		align-items: flex-end;
		padding: 1rem;
		li {
			margin-bottom: 1rem;
			font-size: 110%;
			text-transform: uppercase;
			font-weight: 200;
			opacity: .9;
		}
	}
`
const Menu = ({ open, close }) => {
	const links = [
		'falcon 9',
		'falcon heavy',
		'dragon',
		'starship',
		'human spaceflight',
		'rideshare',
		'mission',
		'launches',
		'careers',
		'updates',
		'shop'
	]
	return (
		<StyledMenu open={open}>
			<div id="header">
				<div onClick={close}>
					<i class="fa fa-times" aria-hidden="true" />
				</div>
			</div>
			<ul>{links.map((link, i) => <li key={i}>{link}</li>)}</ul>
		</StyledMenu>
	)
}
export default Menu
