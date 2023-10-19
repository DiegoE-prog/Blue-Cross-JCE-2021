Here you can put all the interfaces that you will create
for your repostories, remember we will follow the SOLID principles.

The interface only will be the contract, and will not have
any implementation, the repository should implement the functionality
of that contract.

Example:

	public interface IRepositoryExample(){
		void CreateSomething();
		void UpdateSomething();
		void DeleteSomething();
		Something GetSomething();
	}