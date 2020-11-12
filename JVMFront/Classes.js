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
    constructor(id, userId, user, productId, product, quantity){
        this.Id = id; 
        this.UserId = userId; 
        this.User = user; 
        this.ProductId = productId;
        this.Product = product; 
        this.Quantity = quantity;
    }
}