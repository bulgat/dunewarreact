using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Author
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Uid { get; set; }

    public int ArticlesId { get; set; }

    public virtual Article Articles { get; set; } = null!;
}
