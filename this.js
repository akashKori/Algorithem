var incRev = { ceo: 'ramesh'};
var microsoft = {ceo: 'pichai'};

showCeo= function() {
console.log(this.ceo);
}

incRev.ceoName = showCeo;
microsoft.ceoName = showCeo;

incRev.ceoName();
microsoft.ceoName();

microsoft['ceoName']();