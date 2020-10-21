using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp.Models;
using MusicApp.ViewModels;

namespace MusicApp.Controllers
{
    /// <summary>
    /// Api controller for processing album-related requests.
    /// </summary>
    /// <remarks>
    /// Contain basic CRUD operations of albums data.
    /// </remarks>
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly ApplicationContext db;

        public AlbumsController(ApplicationContext db)
        {
            this.db = db;
        }

        /// <summary>
        /// Get album by its Id asynchronously.
        /// </summary>
        /// <param name="id">Id of requeted album</param>
        /// <returns>Requested album or error</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<AlbumFormViewModel>> Get(int id)
        {
            var album = await db.Albums.FirstOrDefaultAsync(t => t.Id == id);
            if (album == null)
                return NotFound();
            return new AlbumFormViewModel(album);
        }

        /// <summary>
        /// Add new album asynchronously.
        /// </summary>
        /// <param name="album">Album to add</param>
        /// <returns>Added album or error</returns>
        [HttpPost]
        public async Task<ActionResult<AlbumFormViewModel>> Post(Album album)
        {
            if (ModelState.IsValid)
            {
                await db.Albums.AddAsync(album);
                await db.SaveChangesAsync();
                return Ok(new AlbumFormViewModel(album));
            }
            return BadRequest(ModelState);
        }

        /// <summary>
        /// Update existing album asynchronously.
        /// </summary>
        /// <param name="album">Album to update</param>
        /// <returns>Updated album or error</returns>
        [HttpPut]
        public async Task<ActionResult<AlbumFormViewModel>> Put(Album album)
        {
            if (ModelState.IsValid)
            {
                db.Update(album);
                await db.SaveChangesAsync();
                return Ok(new AlbumFormViewModel(album));
            }
            return BadRequest(ModelState);
        }

        /// <summary>
        /// Delete existing album asynchronously.
        /// </summary>
        /// <param name="id">Id of album to delete</param>
        /// <returns>Deleted album or error</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<AlbumFormViewModel>> Delete(int id)
        {
            var album = await db.Albums.FirstOrDefaultAsync(x => x.Id == id);
            if (album == null)
                return NotFound();

            db.Albums.Remove(album);
            await db.SaveChangesAsync();
            return Ok(new AlbumFormViewModel(album));
        }
    }
}
