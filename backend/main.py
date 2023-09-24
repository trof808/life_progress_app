from fastapi import FastAPI
from .db import database, Stream

app = FastAPI()


@app.get('/')
async def root():
    return {"message": "Hello world!"}


@app.get('/streams')
async def get_streams():
    return await Stream.objects.all()


@app.on_event("startup")
async def startup() -> None:
    if not database.is_connected:
        await database.connect()


@app.on_event("shutdown")
async def shutdown() -> None:
    if database.is_connected:
        await database.disconnect()
