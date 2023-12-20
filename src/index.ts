import { AppDataSource } from "./data-source"
import { Bean } from "./entity/Beans"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Jhon"
    user.lastName = "Doe"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Inserting a new bean into the database...")
    const bean = new Bean()
    bean.beanColour = "Red"
    bean.beanQty = 2;
    await AppDataSource.manager.save(bean)
    console.log("Saved a new user with id: " + bean.id)
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    const beans = await AppDataSource.manager.find(Bean)
    console.log("Loaded beans: ", beans)
    
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
