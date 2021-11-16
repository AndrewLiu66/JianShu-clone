import React, { Component } from 'react';
// 在根组件，也就是App.js, 已经引入了store，并将数据传递给了header，header为了能跟store
// 建立连接，需要引入connect
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// 给动画用
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'

import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';

class Header extends Component {
	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// immutable方法toJS， 将immutable对象转化为js对象
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i = page - 1; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						Popular Search
						<SearchInfoSwitch
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
							switch
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
	// eslint-disable-next-line react/require-render-return
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>Home</NavItem>
					<NavItem className='left'>Download APP</NavItem>
					{
						login ?
							<NavItem onClick={logout} className='right'>Logout</NavItem> :
							<Link to='/login'>
								<NavItem className="right">Login</NavItem>
							</Link>
					}
					<NavItem className='right'>
						<i className='iconfont'>&#xe602;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i
							className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
						>&#xe6e9;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
						<Button className='writting'>
							<i className="iconfont">&#xe615;</i>
							Write A Post
						</Button>
					</Link>
					<Button className='reg'>Register</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// state.header是一个immutable对象，获取数据需要用get方法
		// 这里的state是在外面的index创建，在最大的immutable里面，
		// 已经使用了redux- immutable来把state变成immutable对象，因此获取header的数据
		// 也要用get方法，
		// focused: state.getIn(['header', 'focused'])等价于，意思是在header下面寻找focused变量
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		// 取出值判读用户是否已经登录了
		login: state.getIn(['login', 'login'])
	}
}

// mapDispathToProp使得header有能力改变store的内容
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			// 只有在没数据的时候才会发送请求，也就是刚开始render的时候 
			(list.size === 0) && dispatch(actionCreators.getList())
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				// 把文字转化成数字
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}

// 用来将store的数据映射到Header组件上
export default connect(mapStateToProps, mapDispathToProps)(Header);