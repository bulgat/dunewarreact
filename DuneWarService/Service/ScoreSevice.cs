using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using DuneWarLastFantasy.Repositories;
using DuneWarLastFantasy.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace DuneWarLastFantasy.Service
{
    public class ScoreSevice
    {
        ScoreRepository _scoreRepository;
        UnitOfWork _unitOfWork;
        public ScoreSevice(ScoreRepository scoreRepository, UnitOfWork unitOfWork)
        {
            _scoreRepository = scoreRepository;
            _unitOfWork = unitOfWork;
        }
        public async Task<IQueryable<Score>> GetScoreList()
        {
            return await _scoreRepository.GetScoreList();

        }
        public async Task<IEnumerable<ScoreResponse>> AnonymousScoreList()
        {
            return await _scoreRepository.AnonymousScoreList();
        }
    }
 
    
}
