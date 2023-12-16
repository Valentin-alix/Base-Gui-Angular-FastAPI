from fastapi import APIRouter

router = APIRouter(prefix="/home")


@router.get("/", response_model=str)
def home():
    return "Hello !"