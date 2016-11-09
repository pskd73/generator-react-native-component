import React, { Component } from 'react'
import Styles from './styles'

class <%= name %> extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text><%= name %></Text>
			</View>
		)
	}
}

export default <%= name %>