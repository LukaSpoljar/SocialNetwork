from typing import Any

from pydantic import BaseModel


class User(BaseModel):
    username: str
    password: str
    email: str

    def __init__(self, **data: Any):
        super().__init__(**data)
        self.username = 'Luka'
        self.password = 'Password'
        self.email = 'email@gmail.com'
