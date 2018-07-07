import Button from '@/uis/Button'
import iSwitch from '@/uis/Switch'
import Select from '@/uis/Select'

export default{
	install(Vue,b){
		const components = {
		    Button,
		    iSwitch,
		    Select,
	  	}
		Object.keys(components).map(k=>{
			let cpt = components[k];
			Vue.component(cpt.name,cpt);
		})
	}
}