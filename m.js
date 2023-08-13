const a= new Map()
a.set('a',1)
a.set('b',[9.9,90])
a.set('c',3)
console.log(a.has(1));
console.log(a.values());
a.delete('a')
console.log(a.values());
console.log(a.keys());
