"""Forms for playlist app."""

from wtforms import SelectField
from flask_wtf import FlaskForm


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    # Add the necessary code to use this form
    name = StringField("Name", validators=[InputRequired(message="a name is required"), Length(min=1, max=20)],)
    description = StringField("description", validators=[Optional()])


class SongForm(FlaskForm):
    """Form for adding songs."""

    # Add the necessary code to use this form
    title = StringField("Title", validators=[InputRequired(message="Title is required"), Length(min=1, max=20)],)
    artist = StringField("Artist", validators=[InputRequired(), Length(min=1, max=20)])



# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
