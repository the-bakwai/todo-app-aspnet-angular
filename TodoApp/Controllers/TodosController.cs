using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoApp.Database;
using TodoApp.Models;

namespace TodoApp.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly DataContext _ctx;

        public TodosController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet()]
        public async Task<IEnumerable<Todo>> Index()
        {
            return await _ctx.Todos.ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Todo> GetAsync(int id)
        {
            return await _ctx.Todos.FindAsync(id);
        }

        [HttpPost()]
        public async Task<IActionResult> Create([Bind("Description, Done")] Todo todo)
        {

            if (ModelState.IsValid)
            {
                todo.DateCreated = DateTime.Now;
                todo.DateUpdated = DateTime.Now;

                await _ctx.Todos.AddAsync(todo);

                await _ctx.SaveChangesAsync();

                return Ok(todo);
            }
            else
            {
                return UnprocessableEntity(ModelState);
            }
        }

        [HttpPatch("{id:int}")]
        public async Task<IActionResult> Update(int id, [Bind("Description, Done")] Todo todo)
        {
            var t = await _ctx.Todos.FindAsync(id);
            if (t == null)
            {
                return BadRequest();
            }

            t.Description = todo.Description;
            t.Done = todo.Done;
            t.DateUpdated = DateTime.Now;

            await _ctx.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var t = await _ctx.Todos.FindAsync(id);
            if (t == null)
            {
                return BadRequest();
            }

            t.Deleted = true;

            await _ctx.SaveChangesAsync();

            return NoContent();
        }

    }
}
