using Dapper;
using JCE.Data.Data;
using JCE.Data.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JCE.Data.Repository
{
    public class Class1
    {
        private readonly IDataContext _context;
        public Class1(IDataContext context)
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
