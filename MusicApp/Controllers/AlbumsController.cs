using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp.Models;
using MusicApp.ViewModels;

namespace MusicApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly ApplicationContext db;

        public AlbumsController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AlbumFormViewModel>> Get(int id)
        {
            var album = await db.Albums.FirstOrDefaultAsync(t => t.Id == id);
            if (album == null)
                return NotFound();
            return new AlbumFormViewModel(album);
        }

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

        [HttpDelete("{id}")]
        public async Task<ActionResult<AlbumFormViewModel>> Delete(int id)
        {
            var album = await db.Albums.FirstOrDefaultAsync(x => x.Id == id);
            if (album != null)
            {
                db.Albums.Remove(album);
                await db.SaveChangesAsync();
            }
            return Ok(new AlbumFormViewModel(album));
        }
    }
}
