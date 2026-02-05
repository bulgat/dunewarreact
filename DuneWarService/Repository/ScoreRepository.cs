using AutoMapper;
using AutoMapper.QueryableExtensions;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;
using System.Data.Entity;
using System.IO.Pipes;

namespace DuneWarLastFantasy.Repositories
{
    public class ScoreRepository
    {
        AppContextPostgree _context;
        IMapper _mapper;
        public ScoreRepository(AppContextPostgree context, IMapper mapper) { 
            _context = context;
            _mapper = mapper;
        }
        public async Task<IQueryable<Score>> GetScoreList()
        {

            var kol = _context.Score.Select(a => new { id = a.Id, name = a.Name }).ToList();

            return  _context.Score;

        }
        public async Task<IEnumerable<ScoreResponse>> AnonymousScoreList()
        {
            return _context.Score.Select(a => new ScoreResponse { Id = a.Id, Name = a.Name });
        }


    }
}
