import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  BackTop,
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt="" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013db4574be1b532f875a42915f365.jpg%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625399043&t=485008607de507e73da993eb17abcd49" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  // 从home组件接受所有的数据，再让home组件与store进行连接，把数据传递给store
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }
  componentWillUnmount() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home); 