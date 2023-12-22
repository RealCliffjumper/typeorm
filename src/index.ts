import { AppDataSource } from "./data-source"
import { BeanStalk } from "./entity/BeanStalk"
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

    console.log("Inserting new beans into the database...")

    const bean1 = new Bean()
    bean1.beanColour = "Red"
    bean1.beanQty = 3;
    await AppDataSource.manager.save(bean1)
    console.log("Saved a new bean with id: " + bean1.id)

    const bean2 = new Bean()
    bean2.beanColour = "Red"
    bean2.beanQty = 5;
    await AppDataSource.manager.save(bean2)
    console.log("Saved a new bean with id: " + bean2.id)
    
    
    const beanStalk = new BeanStalk()
    beanStalk.beansQty = bean1.beanQty + bean2.beanQty
    beanStalk.bean = [bean1, bean2]
    await AppDataSource.manager.save(beanStalk)
    console.log("Saved a new beanstalk with id: " + beanStalk.id)
    
    const beans = await AppDataSource.manager.find(Bean)
    console.log("Loaded beans: ", beans)
    console.log("Startup complete.")

    
}).catch(error => console.log(error))
