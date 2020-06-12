function hasCollided(ob1, ob2){
    bulletRightEdge = ob1.x;
    wallLeftEdge = ob2.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true;
    }
    return false;
}