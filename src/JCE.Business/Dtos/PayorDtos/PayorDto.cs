namespace JCE.Business.Dtos.PayorDtos;

public class PayorDto
{
    public int payorid { get; set; }
    public string payor_id_table { get; set; }
    public string payorname { get; set; }
    public string payoraddress { get; set; }
    public string zipcode { get; set; }
    public string state { get; set; }
    public string city { get; set; }
    public Boolean status { get; set; }
}
