import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SideBar from 'components/SideBar';
import PostList from 'components/PostList';
import Header from 'components/Header';
import * as HomeActions from './actions';
import { Button } from 'antd';
import siteConfig from 'siteConfig';
import './style.css';

import { Grid, Row } from "react-bootstrap";

const mapStateToProps = ({ home }) => ({ home });

const mapDispatchToProps = dispatch => ({
  homeActions: bindActionCreators(HomeActions, dispatch),
});

export class Home extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    homeActions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.perPage = 20;
  }

  componentDidMount() {
    this.props.homeActions.fetchPostInfo();
    this.props.homeActions.resetPostList();
    this._loadPage(1);
  }

  _loadPage(pageNum) {
    this.props.homeActions.fetchPostList(this.perPage, pageNum);
    this.pageNum = pageNum;
  }

  render() {
    const {
      postInfo: { postCount, tagInfo },
      postList,
      loadMore,
    } = this.props.home.toJS();

    const navList = [
      {
        linkTo: '/dashboard',
        tag: `Dashboard`
      },
      {
        linkTo: '/',
        tag: `All Build History（${postCount}）`,
      },
      ...tagInfo,
    ];

    const loadMoreBtn = loadMore
      ? <Button
          size="large"
          className="load-more"
          onClick={() => this._loadPage(this.pageNum + 1)}>
          Load More
        </Button>
      : false;

    return (
      <div className="page-container">
        <SideBar data={siteConfig} />
        <div className="post-list">
          <Header data={navList} activeTag={`All Build History（${postCount}）`} />
          <div className="content">
            <Grid fluid>
              <Row>
              <PostList goHome data={postList} />
              </Row>
            </Grid>
          </div>
          {loadMoreBtn}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
