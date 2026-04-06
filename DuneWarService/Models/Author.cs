using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models;

public partial class Author
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;
    [Column("Uid")]
    public int UnicId { get; set; }

    public int ArticlesId { get; set; }

    public virtual Article Articles { get; set; } = null!;
}
