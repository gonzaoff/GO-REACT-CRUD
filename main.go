package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

)

func main() {

	app := fiber.New()

	app.Use(cors.New())
	
	// Se esta sirviendo desde el compilado de los archivos estaticos de jsx
	app.Static("/", "./client/dist")

	
	fmt.Println("Server on port 5000")
	app.Listen(":5000")

	// Podemos observar que ya porteamos nuestro html a jsx :D 😊😊😊
	
}