(function(w){
	const d=w.document, tables=d.querySelectorAll('table');
	let i=0, l=tables.length, m=[];
	while(i<l){
		const table=tables[i];
		m[i]={node:table,text:[...table.querySelectorAll('thead tr')].concat([...table.querySelectorAll('table>tr, tbody>tr')].concat([...table.querySelectorAll('tfoot tr')])).map(function(row){
			return [...row.querySelectorAll('th,td')].map(function(cell){
				return cell.textContent.trim();
			}).join(',')+';\r\n';
		}).join('\r')+'\n'};
		++i;
	};
	
	i=0,l=m.length;
	while(i<l){
		const e=m[i],n=e.node,p=n.parentNode;
		p.style.whiteSpace='pre';
		p.replaceChild(d.createTextNode(e.text),n);
		++i;
	};
})(window);