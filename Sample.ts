

class Authorizer
{
	roleAllowed : string;
	
	constructor(roleAllowed: string)
	{
		this.roleAllowed = roleAllowed;
	}
	
	getBindedActionToDo() : Func {
		return this.actionToDo.bind(this);
	}
	
	private getRole(basicAuthUser: string) : string {
		return "rockstar"; // davegrohl's role fetched from database
	}
	
	actionToDo(i: number, basicAuthUser: string) : boolean 
	{
		// Database operation here.
		// Get the role of basicAuthUser
		
		var role = this.getRole(basicAuthUser); // davegrohl's role fetched from database
				
		return role === this.roleAllowed;	
	}
}



	


interface Func {
	(random: number, basicAuthUser: string) : boolean;
}


function doSomething(...actions: Func[]) : void {
	
	var basicAuthUser = "davegrohl"; // obtained from browser's basic authentication	
	
	for(var i = 0; i < actions.length; ++i) {
		var a = actions[i];
		var okToContinue = a(Math.random() * 100, basicAuthUser);
		if (!okToContinue) 
			break;
	}
}

console.log('');
console.log('without authorization');
doSomething(
	(i,u) => { console.log('Alpha ' + i); return true; },
	(i,u) => { console.log('Beta ' + i); return true; }
	);
	


console.log('');
console.log("Rockstar activity:");
doSomething(
	new Authorizer("rockstar").actionToDo,
	(i,u) => { console.log("Alpha " + i); return true; },
	(i,u) => { console.log("Beta " + i); return true; }			
	);						


console.log('');
console.log("Guest activity:");		
doSomething(
	new Authorizer("guest").actionToDo,
	(i,u) => { console.log("Alpha " + i); return true; },
	(i,u) => { console.log("Beta " + i); return true; }			
);	

