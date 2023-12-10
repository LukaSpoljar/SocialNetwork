from fastapi import FastAPI
from users_db import get_router

app = FastAPI(
    title='Social Network',
    summary='App for final thesis',
    version='0.0.1'
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

app.include_router(get_router())