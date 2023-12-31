﻿using System.Reflection;
using JCE.Business.Dtos.SecurityQuestionsDtos;
using JCE.Business.Services.Interfaces;
using JCE.Data.Entities;
using JCE.Data.Repository.Interfaces;

namespace JCE.Business.Services;
public class SecurityQuestionsService : ISecurityQuestionsService
{
    private readonly ISecurityQuestionsRepository _securityQuestionsRepository;

    public SecurityQuestionsService(ISecurityQuestionsRepository securityQuestionsRepository)
    {
        _securityQuestionsRepository = securityQuestionsRepository;
    }
    public async Task<GetSecurityQuestionsDto> GetSecurityQuestions(int userid)
    {
        var squestions = await _securityQuestionsRepository.GetSecurityQuestions(userid) ?? throw new Exception(message: "The User with Id '" + userid + "' does not exist");

        return new GetSecurityQuestionsDto
        {
            UserId = squestions.UserId,
            Q1Answer = squestions.Q1Answer,
            Q2Answer = squestions.Q2Answer,
            Q3Answer = squestions.Q3Answer,
            Q4Answer = squestions.Q4Answer,
            Q5Answer = squestions.Q5Answer,
            Q6Answer = squestions.Q6Answer,
            Q7Answer = squestions.Q7Answer,
            Q8Answer = squestions.Q8Answer,

        };
    }

    public async Task<bool> UpdateSecurityQuestions(UpdateSecurityQuestionsDto update)
    {
        //Validate the userid
        if(update.UserId == 0)
            throw new Exception(message: "UserId is missing");

        //Validate that every question field has a value
        foreach(PropertyInfo field in update.GetType().GetProperties()){
            if(field.GetValue(update) == null)
                throw new Exception(message: field.Name + " is a mandatory field");
        }

        var success = await _securityQuestionsRepository.UpdateSecurityQuestions(new SecurityQuestions {
            UserId = update.UserId,
            Q1Answer = update.Q1Answer,
            Q2Answer = update.Q2Answer,
            Q3Answer = update.Q3Answer,
            Q4Answer = update.Q4Answer,
            Q5Answer = update.Q5Answer,
            Q6Answer = update.Q6Answer,
            Q7Answer = update.Q7Answer,
            Q8Answer = update.Q8Answer,
        });
        
        //Validate if the update was succesful
        if(success){
            return success;
        }else{
            throw new Exception(message: "Failed to update security questions");
        }

    }
}
