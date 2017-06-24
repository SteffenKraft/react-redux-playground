import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispachToProps(dispatch) {
    return {}
}

class Single extends Component {
    static propTypes = {
        posts: PropTypes.array,
        comments: PropTypes.object,
    };

    render () {
        const post = this.props.posts.filter(post => post.code === this.props.match.params.id)[0]
        
        return (
            <div>
                <Helmet>
                    <title>single</title>
                    <meta name="description" content="single" />
                </Helmet>
                <h2>{post.code}</h2>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Single)