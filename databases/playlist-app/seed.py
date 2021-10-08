from models import db, Playlist, Song, PlaylistSong
from app import app

db.drop_all()
db.create_all()
