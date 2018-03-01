(function(w){
	const d=w.document, m=d.querySelectorAll('table'), l=m.length;
	let i=0, t=[];
	while(i<l){
		const e=m[i];
		t[i]=[...e.querySelectorAll('thead tr')].concat([...e.querySelectorAll('table>tr, tbody>tr')].concat([...e.querySelectorAll('tfoot tr')])).map(function(row){
			return [...row.querySelectorAll('th,td')].map(function(cell){
				return cell.textContent.trim();
			}).join(',')+';\r\n';
		}).join('\r')+'\n';
		++i;
	};
	console.log(t.join('\r'));
})(window);