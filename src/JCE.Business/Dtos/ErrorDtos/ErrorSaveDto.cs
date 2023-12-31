﻿using JCE.Data.Entities;

namespace JCE.Business.Dtos.ErrorDtos;

public class ErrorSaveDto
{
    public int ErrorId { get; set; }
    public int UserId { get; set; }
    public string CreatedBy { get; set; }
    public string Message { get; set; }
    public string Description { get; set; }
    public List<int> Payors { get; set; }
    public List<ConditionGroup> Condition { get; set; }
}
