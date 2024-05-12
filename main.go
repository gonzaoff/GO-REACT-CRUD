package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	app := fiber.New()

	app.Use(cors.New())
	
	app.Static("/", "./client/")


	app.Listen(":5000")
	fmt.Println("Server on port 3000")
	
}