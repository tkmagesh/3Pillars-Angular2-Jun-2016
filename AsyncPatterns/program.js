var program = (function(){
	function addSync(x,y){
		console.log(`     [SP] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`     [SP] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[SC] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[SC] result = ${result}`);
	}


	function addAsync(x,y, onResult){
		console.log(`     [SP] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`     [SP] returning result`);
			onResult(result);
		},3000);		
	}

	function addAsyncClient(x,y){
		console.log(`[SC]triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[SC]result = ${result}`);
		});
		
	}

	function addAsyncPromise(x,y){
		console.log(`     [SP] processing ${x} and ${y}`);
		var promise = new Promise(function(resolve, reject){
			setTimeout(function(){
				var result = x + y;
				console.log(`     [SP] returning result`);
				resolve(result);
			},3000);
		})
		return promise;	
	}


	return{
		addAsyncClient : addAsyncClient,
		addSyncClient : addSyncClient,
		addAsyncPromise : addAsyncPromise
	}


})()