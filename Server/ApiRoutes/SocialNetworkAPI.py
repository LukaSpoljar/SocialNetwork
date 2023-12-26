from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from ApiRoutes.Users import users_db

app = FastAPI(title="Social Network", summary="App for final thesis", version="0.0.1")

public_client_app_directory = Jinja2Templates(directory="ApiRoutes/Public_Client_App")


@app.get("/")
async def serve_client_app(request: Request):
    return public_client_app_directory.TemplateResponse("index.html", {"request": request})


app.include_router(users_db.get_router())
