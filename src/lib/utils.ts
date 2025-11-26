import { GRID_SIZE } from './constants'
import { SnakePosition } from './types'

// ==================== SNAKE GAME LOGIC ====================
const generateFood = (snake: SnakePosition[]): SnakePosition => {
    let newFood: SnakePosition
    do {
        newFood = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE),
        }
    } while (
        snake.some(
            (segment) => segment.x === newFood.x && segment.y === newFood.y
        )
    )
    return newFood
}

const checkCollision = (
    head: SnakePosition,
    snake: SnakePosition[]
): boolean => {
    // Wall collision
    if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
    ) {
        return true
    }
    // Self collision
    return snake.some((segment) => segment.x === head.x && segment.y === head.y)
}

export { generateFood, checkCollision }
// ==================== END SNAKE GAME LOGIC ====================
