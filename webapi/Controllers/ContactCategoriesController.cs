using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactCategoriesController : ControllerBase
    {
        private readonly ContactsDatabaseContext _context;

        public ContactCategoriesController(ContactsDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ContactCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactCategory>>> GetCategories()
        {
          if (_context.Categories == null)
          {
              return NotFound();
          }
            return await _context.Categories.ToListAsync();
        }

        // GET: api/ContactCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactCategory>> GetContactCategory(long id)
        {
          if (_context.Categories == null)
          {
              return NotFound();
          }
            var contactCategory = await _context.Categories.FindAsync(id);

            if (contactCategory == null)
            {
                return NotFound();
            }

            return contactCategory;
        }

        // PUT: api/ContactCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactCategory(long id, ContactCategory contactCategory)
        {
            if (id != contactCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(contactCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ContactCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContactCategory>> PostContactCategory(ContactCategory contactCategory)
        {
          if (_context.Categories == null)
          {
              return Problem("Entity set 'ContactsDatabaseContext.Categories'  is null.");
          }
            _context.Categories.Add(contactCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactCategory", new { id = contactCategory.Id }, contactCategory);
        }

        // DELETE: api/ContactCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactCategory(long id)
        {
            if (_context.Categories == null)
            {
                return NotFound();
            }
            var contactCategory = await _context.Categories.FindAsync(id);
            if (contactCategory == null)
            {
                return NotFound();
            }

            _context.Categories.Remove(contactCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactCategoryExists(long id)
        {
            return (_context.Categories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
