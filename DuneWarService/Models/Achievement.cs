using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Achievement
{
    public int Id { get; set; }

    public int? AchievementId { get; set; }

    public virtual Student? AchievementNavigation { get; set; }
}
