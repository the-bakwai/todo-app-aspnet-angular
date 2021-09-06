using Microsoft.EntityFrameworkCore;
using TodoApp.Models;

namespace TodoApp.Database
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
