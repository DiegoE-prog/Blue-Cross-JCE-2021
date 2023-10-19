Here you can put all the interfaces that you will create
for your services, remember we will follow the SOLID principles.

The interface only will be the contract, and will not have
any implementation, the service should implement the functionality
of that contract.

Example:

public interface IServiceExample(){
	void CreateSomething();
	void UpdateSomething();
	void DeleteSomething();
	Something GetSomething();
}