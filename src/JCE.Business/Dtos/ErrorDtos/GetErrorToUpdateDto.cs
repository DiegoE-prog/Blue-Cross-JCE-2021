using JCE.Business.Dtos.PayorDtos;
namespace JCE.Business.Dtos.ErrorDtos;

public class GetErrorToUpdateDto
{
    public int ErrorId { get; set; }
    public string CreatedBy { get; set; }
    public string Message { get; set; }
    public string Description { get; set; }
    public List<GetPayorForErrorToUpdateDto> Payors { get; set; }
}
