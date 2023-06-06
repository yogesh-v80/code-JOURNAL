const Pi = 3.14;

const sqr = x => x*x;
//or
// module.exports.sqr = x => x*x;



// module.exports.sqr = sqr
// module.exports.Pi = Pi
// module.exports.str = "hlo"
// 
// OR
// 
// exports.sqr = sqr
// exports.Pi = Pi
// exports.str = "hlo"   //note: it won't work
// we can't exports to something like this ( the "hlo" string) 
// 
// OR
//
const math = { 
	Pi: Pi,
	sqr: sqr
}

module.exports = math;






