let styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles[Math.ceil((styles.length-1) / 2)] = 'Classics';
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Rap', 'Reggae');
console.log(styles);

