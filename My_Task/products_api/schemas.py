from pydantic import BaseModel
from typing import List
from datetime import datetime


class ProductBase(BaseModel):
    product_name: str
    product_description: str
    product_cost: float
    product_picture: List[str]


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    pass


class ProductResponse(ProductBase):
    product_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
