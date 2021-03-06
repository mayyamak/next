import React, { Component } from 'react'
import Cookies from 'js-cookie'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Index from '../components/homepage/Index'
import MainHead from '../components/MainHead'
import { getInitials, getIndexInitials } from '../utils/initial'

class Homepage extends Component {

  static async getInitialProps (ctx) {
    // return getIndexInitials(ctx)
  }
  render() {
    return (
      <div className="body">
        <MainHead />
        <Index />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {dispatch, ...bindActionCreators({
  }, dispatch)}
}

const mapStateToProps = state => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Homepage))
