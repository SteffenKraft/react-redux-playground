import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import Photo from './Photo'

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispachToProps(dispatch) {
    return {}
}

class Gallery extends Component {
    
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
                        <Photo key={index} post={post} />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Gallery)