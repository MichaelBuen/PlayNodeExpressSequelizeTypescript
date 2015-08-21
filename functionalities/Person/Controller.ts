class Controller{
		
	name : string = 'Linus T';
	
	persons : Domain.Person[] = [];
	
		
	showName() {
				
		
		{
			var p = new Domain.Person();									
			p.userName = 'hello';
			this.persons.push(p);
		}
		
		{
			var p = new Domain.Person();									
			p.userName = 'nice';		 				 						
			this.persons.push(p);
		}
		
				
		
	}
}
	

angular.module('App', []).controller('Controller', Controller);
