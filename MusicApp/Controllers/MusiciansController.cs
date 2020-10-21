using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp.Models;
using MusicApp.ViewModels;

namespace MusicApp.Controllers
{
    /// <summary>
    /// Api controller for processing musician-related requests.
    /// </summary>
    /// <remarks>
    /// Contain basic CRUD operations of musicians data.
    /// </remarks>
    [Route("api/[controller]")]
    [ApiController]
    public class MusiciansController : ControllerBase
    {
        private readonly ApplicationContext db;

        public MusiciansController(ApplicationContext db)
        {
            this.db = db;
        }

        /// <summary>
        /// Get the list of all musicians asynchronously.
        /// </summary>
        /// <returns>Collection of all musicians</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MusicianViewModel>>> Get()
        {
            return await db.Musicians
                .Include(m => m.Albums)
                .Select(m => new MusicianViewModel(m))
                .ToListAsync();
        }

        /// <summary>
        /// Get musician by its Id asynchronously.
        /// </summary>
        /// <param name="id">Id of requested musician</param>
        /// <returns>Requested musician or error</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<MusicianFormViewModel>> Get(int id)
        {
            var musician = await db.Musicians.FirstOrDefaultAsync(m => m.Id == id);
            if (musician == null)
                return NotFound();
            return new MusicianFormViewModel(musician);
        }

        /// <summary>
        /// Add new musician asynchronously.
        /// </summary>
        /// <param name="musician">Musician to add</param>
        /// <returns>Added musician or error</returns>
        [HttpPost]
        public async Task<ActionResult<MusicianFormViewModel>> Post(Musician musician)
        {
            if (ModelState.IsValid)
            {
                await db.Musicians.AddAsync(musician);
                await db.SaveChangesAsync();
                return Ok(new MusicianFormViewModel(musician));
            }
            return BadRequest(ModelState);
        }

        /// <summary>
        /// Update existing musician asynchronously.
        /// </summary>
        /// <param name="musician">Musician to update</param>
        /// <returns>Updated musician or error</returns>
        [HttpPut]
        public async Task<ActionResult<MusicianFormViewModel>> Put(Musician musician)
        {
            if (ModelState.IsValid)
            {
                db.Update(musician);
                await db.SaveChangesAsync();
                return Ok(new MusicianFormViewModel(musician));
            }
            return BadRequest(ModelState);
        }

        /// <summary>
        /// Delete existing musician asynchronously.
        /// </summary>
        /// <param name="id">Id of musician to delete</param>
        /// <returns>Deleted musician or error</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<MusicianFormViewModel>> Delete(int id)
        {
            var musician = await db.Musicians.FirstOrDefaultAsync(m => m.Id == id);
            if (musician == null)
                return NotFound();

            db.Musicians.Remove(musician);
            await db.SaveChangesAsync();
            return Ok(new MusicianFormViewModel(musician));
        }
    }
}
