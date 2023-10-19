using Dapper;
using JCE.Data.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCE.Data.Repository
{
    public class Class1
    {
        private readonly DataContext _context;
        public Class1(DataContext context)
        {
            _context = context;

        }

        public void testConnection()
        {
            using var connection = _context.CreateConnection();

            connection.Open();
        }
    }
}
