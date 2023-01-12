Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'ironsworn-pl-pl',
			lang: 'pl',
			dir: 'compendium'
		}); 
  } // END if(typeof Babele  
});
