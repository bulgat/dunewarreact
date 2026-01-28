using AutoMapper;
using DuneWarLastFantasy.DTO.Response;
using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using System;

namespace DuneWarLastFantasy
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Arsenal, ArsenalResponse>()
                .ForMember(dest => dest.NumCannon, opt => opt.MapFrom(src => src.NumCannon));

            CreateMap<Arsenal, ArsenalSlashResponse>();

            CreateMap<Achievement, AchievementResponse>()
                .ForMember(dest=>dest.Id,opt=>opt.Ignore());

            CreateMap<Article, ArticleResponse>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title != null ? src.Content : src.Description))
                .ForMember(dest => dest.Content, opt => opt.AllowNull())
                .ForMember(dest => dest.Check, opt => opt.MapFrom(src => (src.Description.Length > 4) == true))
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => DateOnly.FromDateTime(src.CreatedAt.Value.AddHours(-3))))
                .ForPath(dest => dest.Uid, opt => opt.MapFrom(src => new List<int>() { src.Authors.FirstOrDefault().Id }));

        }
    }
}
