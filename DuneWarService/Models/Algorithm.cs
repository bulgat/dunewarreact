using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Algorithm
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Client> Clients { get; set; } = new List<Client>();
}
