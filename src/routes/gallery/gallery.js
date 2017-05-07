import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispachToProps(dispatch) {
    return {}
}

class gallery extends Component {
    
    static propTypes = {
        posts: PropTypes.array,
    };

    render () {
        return (
            <div>
                <Helmet>
                    <title>gallery</title>
                    <meta name="description" content="My React Redux - gallerypage" />
                </Helmet>
                <h2>gallery</h2>
                {this.props.posts.map((post, index) => {
                    return (
                        <span key={index}>{post.caption}</span>
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(gallery)