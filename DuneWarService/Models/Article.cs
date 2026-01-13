using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Article
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string Content { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public int Uid { get; set; }

    public virtual ICollection<Author> Authors { get; set; } = new List<Author>();
}
