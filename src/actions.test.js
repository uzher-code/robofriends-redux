import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants';
import * as actions from './actions';
import fetchMock from 'fetch-Mock'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
	it('should return a payload of type CHANGE_SEARCH_FIELD', () => {
		expect(actions.setSearchField('TESTING')).toEqual({
			type: CHANGE_SEARCH_FIELD,
			payload: 'TESTING'
		})
	})	
})

describe('requestRobots', () => {
	afterEach(() => {
		fetchMock.restore()
;	})
	

	it('should dispatch REQUEST_ROBOTS_PENDING', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots())
		const action1 = store.getActions();
		expect(action1[0]).toEqual({
			type: REQUEST_ROBOTS_PENDING
		})
	})
	it('should dispatch REQUEST_ROBOTS_SUCCESS', () => {
		const store = mockStore();
		fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
		body: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}]
	})
		return store.dispatch(actions.requestRobots()).then(() => {
			const expectedAction = [{
				type: REQUEST_ROBOTS_PENDING
			},
			{
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [{
					id: 3,
					name: 'John',
					email: 'john@gmail.com'
				}]
			}
		]
			const action = store.getActions();
			expect(action).toEqual(expectedAction)
		})
	})
	it('should dispatch REQUEST_ROBOTS_FAIL', () => {
		const store = mockStore();
		fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
		throws: {error: 'OOPS!!!'}
	})
		return store.dispatch(actions.requestRobots()).then(() => {
			const expectedAction = [{
				type: REQUEST_ROBOTS_PENDING
			},
			{
				type: REQUEST_ROBOTS_FAIL,
				payload: {
					error: 'OOPS!!!'
				}
			}
		]
			const action = store.getActions();
			expect(action).toEqual(expectedAction)
		})
	})
})