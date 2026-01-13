using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Client
{
    public int Id { get; set; }

    public int MethodId { get; set; }

    public int AlgorithmId { get; set; }

    public string Name { get; set; } = null!;

    public virtual Algorithm Algorithm { get; set; } = null!;

    public virtual Method Method { get; set; } = null!;
}
