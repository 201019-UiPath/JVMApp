class User{
    constructor(id, name,email){
        this.Id = id; this.Name = name; this.Email = email;
    }
}

class Product{
    constructor(id,name,cost,category){
        this.Id = id; this.Name = name; this.Cost = cost; this.Category = category;
    }
}

class UserProduct{
    constructor(id,customer,product, quantity){
        this.Id = id; this.Customer = customer; this.Product = product; this.Quantity = quantity;
    }
}