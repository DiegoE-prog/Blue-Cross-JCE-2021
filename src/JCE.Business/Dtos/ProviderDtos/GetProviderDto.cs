namespace JCE.Business.Dtos.ProviderDtos;

public class GetProviderDto
{
    public int providerid { get; set; }
    public string provider_id_table { get; set; }
    public string providername { get; set; }
    public string type { get; set; }
    public string provideraddress { get; set; }
    public string zipcode { get; set; }
    public string state { get; set; }
    public string city { get; set; }
    public Boolean status { get; set; }
}
