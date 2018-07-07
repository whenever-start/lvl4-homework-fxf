import Button from './Button'
import iSwitch from './Switch'
import Select from './Select'

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