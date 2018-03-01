(function(w){
	const d=w.document, tables=d.querySelectorAll('table');
	let i=0, l=tables.length, m=[];
	while(i<l){
		const e=tables[i];
		m[i]={table:e,csv:[...e.querySelectorAll('thead tr')].concat([...e.querySelectorAll('table>tr, tbody>tr')].concat([...e.querySelectorAll('tfoot tr')])).map(function(row){
			return [...row.querySelectorAll('th,td')].map(function(cell){
				return cell.textContent.trim();
			}).join(',')+';\r';
		}).join('\n')};
		++i;
	};
	i=0,l=m.length;
	if(l>0){
		const b=d.body, s=b.style, v=s.display;
		s.display='none';
		while(i<l){
			const e=m[i],n=e.table,p=n.parentNode,t=d.createElement('PRE');
			t.appendChild(d.createTextNode(e.csv));
			p.replaceChild(t,n);
			++i;
		};
		s.display=v;
		if(b.hasAttribute('style') && b.getAttribute('style')===''){b.removeAttribute('style')}
	};
})(window);