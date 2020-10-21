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
    /// Api controller for processing track-related requests.
    /// </summary>
    /// <remark>
    /// Contain basic CRUD operations and user interactions with tracks data.
    /// </remark>
    [Route("api/[controller]")]
    [ApiController]
    public class TracksController : Controller
    {
        /// <summary>
        /// Class for holding all possible user interactions with tracks data.
        /// </summary>
        public class UserActionParams
        {
            /// <value>
            /// New tracks <c>Rating</c>
            /// </value>>
            public int? Rating { get; set; }

            /// <value>
            /// New tracks <c>IsFavorite</c> value
            /// </value>>
            public bool? IsFavorite { get; set; }

            /// <value>
            /// New tracks <c>IsListened</c> value
            /// </value>>
            public bool? IsListened { get; set; }
        }

        private readonly ApplicationContext db;

        public TracksController(ApplicationContext db)
        {
            this.db = db;
        }

        /// <summary>
        /// Get the list of all track by their album or musician asynchronously.
        /// </summary>
        /// <param name="album">Id of album</param>
        /// <param name="musician">Id of musician</param>
        /// <returns>Collection of requested tracks</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrackViewModel>>> Get(int? album = null, int? musician = null)
        {
            // Get all tracks
            if (album == null && musician == null)
                return await db.Tracks
                    .Select(t => new TrackViewModel(t))
                    .ToListAsync();

            // Get tracks by musician Id
            if (album == null)
                return await db.Tracks
                    .Include(t => t.Album)
                    .Where(t => t.Album.MusicianId == musician)
                    .Select(t => new TrackViewModel(t))
                    .ToListAsync();

            // Get tracks by album Id
            return await db.Tracks
                .Where(t => t.AlbumId == album)
                .Select(t => new TrackViewModel(t))
                .ToListAsync();
        }

        /// <summary>
        /// Get track by its Id asynchronously.
        /// </summary>
        /// <param name="id">Id of requested track</param>
        /// <returns>Requested track or error</returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<TrackFormViewModel>> Get(int id)
        {
            var track = await db.Tracks.FirstOrDefaultAsync(t => t.Id == id);
            if (track == null)
                return NotFound();
            return new TrackFormViewModel(track);
        }

        /// <summary>
        /// Add new track asynchronously.
        /// </summary>
        /// <param name="track">Track to add</param>
        /// <returns>Added track or error</returns>
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

        /// <summary>
        /// Perform user interaction on track asynchronously.
        /// </summary>
        /// <param name="id">Id of track to interact</param>
        /// <param name="actionParams">Interaction data</param>
        /// <returns>Track after interaction or error</returns>
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

        /// <summary>
        /// Update existing track asynchronously.
        /// </summary>
        /// <param name="track">Track to update</param>
        /// <returns>Updated track or error</returns>
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

        /// <summary>
        /// Delete existing track asynchronously.
        /// </summary>
        /// <param name="id">Id of track to delete</param>
        /// <returns>Deleted track or error</returns>
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrackFormViewModel>> Delete(int id)
        {
            var track = await db.Tracks.FirstOrDefaultAsync(x => x.Id == id);
            if (track == null)
                return NotFound();

            db.Tracks.Remove(track);
            await db.SaveChangesAsync();
            return Ok(new TrackFormViewModel(track));
        }
    }
}
