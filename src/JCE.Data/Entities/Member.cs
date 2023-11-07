using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCE.Data.Entities
{
    public class Member
    {
        public int memberid { get; set; }
        public string member_id_table { get; set; }
        public string membername { get; set; }
        public string lastname { get; set; }
        public string sex { get; set; }
        public string memberaddress { get; set; }
        public string zipcode { get; set; }
        public string state { get; set; }
        public string city { get; set; }
        public string dob { get; set; }
        public string subscribeddate { get; set; }
        public Boolean status { get; set; }
    }
}
