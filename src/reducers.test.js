import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () =>{
	const initialStateSearch = {
		searchField: ''
	}

	it('should return the initial state', () => {
		expect.assertions(1);
		expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
	})

	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect.assertions(1);
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({searchField: 'abc'});
	})
})

describe('requestRobots', () =>{
	const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
	}

	it('should return the initial state', () => {
		expect.assertions(1);
		expect(reducers.requestRobots(undefined, {})).toEqual({
			isPending: false,
			robots: [],
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect.assertions(1);
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING
		})).toEqual({
			isPending: true,
			robots: [],
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect.assertions(1);
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}]
		})).toEqual({
			isPending: false,
			robots: [{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}],
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_FAIL', () => {
		expect.assertions(1);
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAIL,
			payload: 'NOOOO!!!!'
		})).toEqual({
			isPending: false,
			robots: [],
			error: 'NOOOO!!!!'
		})
	})
})