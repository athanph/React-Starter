import Loadable from 'react-loadable'
import Loader from './Loader'

export default function Loadabler(opts) {
	return Loadable(
		Object.assign(
			{
				loading: Loader,
				delay: 200, // .2 sec default
				timeout: 15000, // 15 sec
			},
			opts
		)
	)
}
