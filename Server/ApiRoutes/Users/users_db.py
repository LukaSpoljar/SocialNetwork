from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException, Header
from Models.User import User


router = APIRouter(
    prefix="/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.get("/{item_id}")
async def get_user(item_id: int):
    return {"item_id": item_id}


@router.put("/users/")
async def update_user(user: User):
    return {"username": "fakecurrentuser"}


@router.post("/users/")
async def post_user(user: User):
    return {"user": user}


@router.delete("/users/")
async def delete_user(username: str):
    return {"username": username}


def get_router():
    return router
