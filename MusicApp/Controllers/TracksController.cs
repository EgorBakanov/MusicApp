using System.Collections.Generic;
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
    public class TracksController : Controller
    {
        public class UserActionParams
        {
            public int? Rating { get; set; }
            public bool? IsFavorite { get; set; }
            public bool? IsListened { get; set; }
        }

        private readonly ApplicationContext db;

        public TracksController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrackViewModel>>> Get(int? album = null, int? musician = null)
        {
            if (album == null && musician == null)
                return await db.Tracks
                    .Select(t => new TrackViewModel(t))
                    .ToListAsync();

            if (album == null)
                return await db.Tracks
                    .Include(t => t.Album)
                    .Where(t => t.Album.MusicianId == musician)
                    .Select(t => new TrackViewModel(t))
                    .ToListAsync();

            return await db.Tracks
                .Where(t => t.AlbumId == album)
                .Select(t => new TrackViewModel(t))
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TrackFormViewModel>> Get(int id)
        {
            var track = await db.Tracks.FirstOrDefaultAsync(t => t.Id == id);
            if (track == null)
                return NotFound();
            return new TrackFormViewModel(track);
        }

        [HttpPost]
        public async Task<ActionResult<TrackFormViewModel>> Post(Track track)
        {
            if (ModelState.IsValid)
            {
                await db.Tracks.AddAsync(track);
                await db.SaveChangesAsync();
                return Ok(new TrackFormViewModel(track));
            }
            return BadRequest(ModelState);
        }

        [HttpPost("user-action/{id}")]
        public async Task<ActionResult<TrackViewModel>> UserAction([FromRoute] int id, [FromBody] UserActionParams actionParams)
        {
            if (!actionParams.Rating.HasValue && !actionParams.IsFavorite.HasValue && !actionParams.IsListened.HasValue)
                return BadRequest(actionParams);

            var track = await db.Tracks.FirstOrDefaultAsync(t => t.Id == id);
            if (track == null)
                return NotFound();

            if (actionParams.Rating.HasValue) track.Rating = actionParams.Rating.Value;
            if (actionParams.IsFavorite.HasValue) track.IsFavorite = actionParams.IsFavorite.Value;
            if (actionParams.IsListened.HasValue) track.IsListened = actionParams.IsListened.Value;

            db.Update(track);
            await db.SaveChangesAsync();

            return Ok(new TrackViewModel(track));
        }

        [HttpPut]
        public async Task<ActionResult<TrackFormViewModel>> Put(Track track)
        {
            if (ModelState.IsValid)
            {
                db.Update(track);
                await db.SaveChangesAsync();
                return Ok(new TrackFormViewModel(track));
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<TrackFormViewModel>> Delete(int id)
        {
            var track = await db.Tracks.FirstOrDefaultAsync(x => x.Id == id);
            if (track != null)
            {
                db.Tracks.Remove(track);
                await db.SaveChangesAsync();
            }
            return Ok(new TrackFormViewModel(track));
        }
    }
}
