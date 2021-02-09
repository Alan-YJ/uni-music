

export function traceCount(count){
	return Number.parseInt(count) / 10**8 > 1 ? 
	(Number.parseInt(count) / 10**8).toFixed(1) + "亿" :
	Number.parseInt(count) / 10 ** 4 > 1 ? 
	(Number.parseInt(count) / 10 **4).toFixed(1) + "万":
	count
}


