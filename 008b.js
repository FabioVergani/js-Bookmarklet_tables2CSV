(function(w){
	const d=w.document, b=d.body, c=w.console, tables=b.querySelectorAll('table');
	let i=0, l=tables.length, m=[];
	if(l>0){
		while(i<l){
			const e=tables[i];
			m[i]={table:e,csv:[...e.querySelectorAll('thead tr')].concat([...e.querySelectorAll('table>tr, tbody>tr')].concat([...e.querySelectorAll('tfoot tr')])).map(function(row){
				return [...row.querySelectorAll('th,td')].map(function(cell){
					return cell.textContent.trim();
				}).join('|')+';\r';
			}).join('\n')};
			++i;
		};
		i=0,l=m.length;
		if(l>0){
			const k=prompt('display result on 1=console, 2=page, otherwise new tab','');
			if(k!==''){
				if(k!=='2'){
					if(k!=='1'){
						//
					}else{
						c.group('tables:');
						while(i<l){c.log(m[i].csv);++i;};
						c.groupEnd();
					};
				}else{
					const s=b.style, v=s.display;
					s.display='none';
					while(i<l){
						const e=m[i],n=e.table,p=n.parentNode,t=d.createElement('PRE');
						t.appendChild(d.createTextNode(e.csv));
						p.replaceChild(t,n);
						++i;
					};
					s.display=v;
					i='style';
					if(b.hasAttribute(i) && b.getAttribute(i)===''){b.removeAttribute(i)}
				};
			};
		}else{
			c.info('no data');
		};
	}else{
		c.info('no tables');
	};
})(window);