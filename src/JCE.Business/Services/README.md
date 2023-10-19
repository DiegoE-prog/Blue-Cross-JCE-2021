Here you can put all the concrete implementation for the interfaces
that you create in the interfaces folder.

Remember you should implement all the methods that you define in the
interface.

In the Business layer only we put bussiness logic, all related to database
connections or queries should be in the Data layer

Example:

	public class ServiceExample : IServiceExample{
		public void CreateSomething(){
			//Here lies the implementation
		};

		public void UpdateSomething(){
			//Here lies the implementation
		};

		public void DeleteSomething(){
			//Here lies the implementation
		};

		Something GetSomething(){
			//Here lies the implementation
		};
	}