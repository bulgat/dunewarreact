using DuneWarLastFantasy.Models.other;

namespace DuneWarLastFantasy.Repositories
{

        public class ComparerLinqSort : IComparer<Arsenal>
        {
            bool _sort = false;
            public ComparerLinqSort(bool sort)
            {
                _sort = sort;
            }

            public int Compare(Arsenal a, Arsenal b)
            {
                if (_sort)
                {
                    return a.Name.CompareTo(b.Name);
                }

                //return positive if a should be higher, return negative if b should be higher
                return b.Name.CompareTo(a.Name);
            }
        }
    }
