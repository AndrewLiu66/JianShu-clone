import React, { Component } from 'react';
// to receive all the store data from Provider within App.js
import { connect } from 'react-redux';
// 给动画用
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { actionCreators } from './store'

class Header extends Component {
	getListArea(show) {
		if (show) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						Popular Search
						<SearchInfoSwitch>switch</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						<SearchInfoItem>Education</SearchInfoItem>
						<SearchInfoItem>Education</SearchInfoItem>
						<SearchInfoItem>Education</SearchInfoItem>
						<SearchInfoItem>Education</SearchInfoItem>
						<SearchInfoItem>Education</SearchInfoItem>
						<SearchInfoItem>Education</SearchInfoItem>
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
	// eslint-disable-next-line react/require-render-return
	render() {
		return (
			<HeaderWrapper>
				<Logo href='/' />
				<Nav>
					<NavItem className='left active'>Home Page</NavItem>
					<NavItem className='left'>Download APP</NavItem>
					<NavItem className='right'>Login</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe602;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i
							className={this.props.focused ? 'focused iconfont' : 'iconfont'}
						>&#xe6e9;</i>
						{this.getListArea(this.props.focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe612;</i>
						Write A Post
					</Button>
					<Button className='reg'>Register</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

// const Header = (props) => {
// 	return (

// 	)
// }

const mapStateToProps = (state) => {
	return {
		// receive the variable focosed from state and give it a name "focus"
		focused: state.header.get('focused')
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header);
