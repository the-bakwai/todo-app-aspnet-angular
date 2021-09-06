using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApp.Models
{
    public class Todo
    {
        public int Id { get; set; }
        [Required]
        [StringLength(1000)]
        public string Description { get; set; }
        public bool Done { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateUpdated { get; set; }
        public bool Deleted { get; set; }
    }
}
