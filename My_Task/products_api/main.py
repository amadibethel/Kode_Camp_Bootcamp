from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
import models
import schemas

from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Products API")


@app.get("/products", response_model=list[schemas.ProductResponse])
def get_products(
    page: int = 1,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    skip = (page - 1) * limit
    return crud.get_products(db, skip, limit)


@app.get(
    "/products/{product_id}",
    response_model=schemas.ProductResponse
)
def get_product(
    product_id: int,
    db: Session = Depends(get_db)
):
    product = crud.get_product(db, product_id)

    if not product:
        raise HTTPException(404, "Product not found")

    return product


@app.post(
    "/products",
    response_model=schemas.ProductResponse,
    status_code=201
)
def create_product(
    product: schemas.ProductCreate,
    db: Session = Depends(get_db)
):
    return crud.create_product(db, product)


@app.put(
    "/products/{product_id}",
    response_model=schemas.ProductResponse
)
def update_product(
    product_id: int,
    product: schemas.ProductUpdate,
    db: Session = Depends(get_db)
):
    updated = crud.update_product(db, product_id, product)

    if not updated:
        raise HTTPException(404, "Product not found")

    return updated


@app.delete("/products/{product_id}")
def delete_product(
    product_id: int,
    db: Session = Depends(get_db)
):
    deleted = crud.delete_product(db, product_id)

    if not deleted:
        raise HTTPException(404, "Product not found")

    return {
        "message": "Product deleted successfully"
    }
