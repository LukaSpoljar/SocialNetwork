from fastapi import FastAPI
from ApiRoutes.Users import users_db


app = FastAPI(
    title='Social Network',
    summary='App for final thesis',
    version='0.0.1'
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}


app.include_router(users_db.get_router())
