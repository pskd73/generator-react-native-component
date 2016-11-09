import React, { Component } from 'react'
import Styles from './styles'

import {
	View,
	Text,
} from 'react-native'

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