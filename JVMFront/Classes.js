class Customer{
    constructor(name,email){
        this.Name = name, this.Email = email;
    }

    constructor(id,name,email){
        this.Id = id; this.Name = name, this.Email = email;
    }
}

class Product{
    constructor(id,name,cost,category){
        this.Id = id; this.Name = name; this.Cost = cost; this.Category = category;
    }
}

class UserProduct{
    constructor(customer,product, quantity){
        this.Customer = customer; this.Product = product; this.Quantity = quantity;
    }
}