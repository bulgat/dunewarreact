using AutoMapper;
using AutoMapper.QueryableExtensions;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IEnumerable<Score>> GetScoreList()
        {
            return await _context.Score.ToListAsync();
        }

       
    }
}
