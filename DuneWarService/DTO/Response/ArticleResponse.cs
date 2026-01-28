namespace DuneWarLastFantasy.DTO.Response
{
    public class ArticleResponse
    {
        public int Id { get; set; }

        public string Title { get; set; } = null!;

        public string Content { get; set; } = null!;

        public string? Description { get; set; }
        public bool? Check { get; set; }
        public DateTime? CreatedAt { get; set; }

        public int Uid { get; set; }
    }
}
