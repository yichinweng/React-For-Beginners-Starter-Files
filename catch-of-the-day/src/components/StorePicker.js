import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		// first grab the text from the box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`)
		// second transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				{ /* this.goToStore.bind(this) */ }
				{ /* 我是註解啊～ */}
				<h2>Please Enter A Store</h2>
				<input type="text" placeholder="Store Name" defaultValue={ getFunName() } required ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store >>></button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;