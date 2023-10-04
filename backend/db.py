from enum import Enum
import databases
import ormar
import sqlalchemy
from datetime import datetime

from config import settings

database = databases.Database(settings.db_url)
metadata = sqlalchemy.MetaData()


class DateFieldsMixins:
    created_date: datetime = ormar.DateTime(default=datetime.now)
    updated_date: datetime = ormar.DateTime(default=datetime.now)


class StatusEnum(Enum):
    backlog = 'Backlog'
    in_progress = 'In Progress'
    removed = 'Removed'
    hold = 'Hold'
    done = 'Done'


class BaseMeta(ormar.ModelMeta):
    metadata = metadata
    database = database


class User(ormar.Model):
    class Meta(BaseMeta):
        tablename = "users"

    id: int = ormar.Integer(primary_key=True)
    name: str = ormar.String(max_length=256)
    email: str = ormar.String(max_length=128, unique=True, nullable=False)
    active: bool = ormar.Boolean(default=True, nullable=False)


class Goal(ormar.Model, DateFieldsMixins):
    class Meta(BaseMeta):
        tablename = "goal"

    id: int = ormar.Integer(primary_key=True)
    title: str = ormar.Text()
    description: str = ormar.Text(default='')
    finish_date = ormar.DateTime(default=None)
    status = ormar.String(max_length=100, choices=list(
        StatusEnum), default=StatusEnum.backlog)
# user = ormar.ForeignKey(User)


class Stream(ormar.Model, DateFieldsMixins):
    class Meta(BaseMeta):
        tablename = "stream"

    id: int = ormar.Integer(primary_key=True)
    title: str = ormar.Text()
    finish_date = ormar.DateTime()
    start_date = ormar.DateTime()
    status = ormar.String(max_length=100, choices=list(StatusEnum))
    goal = ormar.ForeignKey(Goal)
# user = ormar.ForeignKey(User)


class Task(ormar.Model, DateFieldsMixins):
    class Meta(BaseMeta):
        tablename = "task"

    id: int = ormar.Integer(primary_key=True)
    title: str = ormar.Text()
    finish_date = ormar.DateTime()
    start_date = ormar.DateTime()
    status = ormar.String(max_length=100, choices=list(StatusEnum))
    stream = ormar.ForeignKey(Stream)
# user = ormar.ForeignKey(User)


engine = sqlalchemy.create_engine(settings.db_url)
metadata.create_all(engine)
