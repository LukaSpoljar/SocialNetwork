from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from fastapi import Header, HTTPException
from pydantic import BaseModel


async def get_token_header(x_token: Annotated[str, Header()]):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


async def get_query_token(token: str):
    if token != "jessica":
        raise HTTPException(status_code=400, detail="No Jessica token provided")


router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.get("/users/")
async def get_users():
    return [{"username": "Rick"}, {"username": "Morty"}]


@router.put("/users/")
async def update_user():
    return {"username": "fakecurrentuser"}


@router.post("/users/")
async def post_user(username: str):
    return {"username": username}


@router.delete("/users/")
async def delete_user(username: str):
    return {"username": username}


def get_router():
    return router