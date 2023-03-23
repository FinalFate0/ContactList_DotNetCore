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
    public class ContactSubcategoriesController : ControllerBase
    {
        private readonly ContactsDatabaseContext _context;

        public ContactSubcategoriesController(ContactsDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ContactSubcategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactSubcategory>>> GetSubcategories()
        {
          if (_context.Subcategories == null)
          {
              return NotFound();
          }
            return await _context.Subcategories.ToListAsync();
        }

        // GET: api/ContactSubcategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactSubcategory>> GetContactSubcategory(long id)
        {
          if (_context.Subcategories == null)
          {
              return NotFound();
          }
            var contactSubcategory = await _context.Subcategories.FindAsync(id);

            if (contactSubcategory == null)
            {
                return NotFound();
            }

            return contactSubcategory;
        }

        // PUT: api/ContactSubcategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactSubcategory(long id, ContactSubcategory contactSubcategory)
        {
            if (id != contactSubcategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(contactSubcategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactSubcategoryExists(id))
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

        // POST: api/ContactSubcategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContactSubcategory>> PostContactSubcategory(ContactSubcategory contactSubcategory)
        {
          if (_context.Subcategories == null)
          {
              return Problem("Entity set 'ContactsDatabaseContext.Subcategories'  is null.");
          }
            _context.Subcategories.Add(contactSubcategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactSubcategory", new { id = contactSubcategory.Id }, contactSubcategory);
        }

        // DELETE: api/ContactSubcategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactSubcategory(long id)
        {
            if (_context.Subcategories == null)
            {
                return NotFound();
            }
            var contactSubcategory = await _context.Subcategories.FindAsync(id);
            if (contactSubcategory == null)
            {
                return NotFound();
            }

            _context.Subcategories.Remove(contactSubcategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactSubcategoryExists(long id)
        {
            return (_context.Subcategories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
