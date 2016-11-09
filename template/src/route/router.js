import Index from '../components/Index.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'
export default [
	{
		name : 'index',
		path : '/index/:userId',
		component : Index
	},
	{
		path : '*',
		component : NotFoundComponent
	}
	
]