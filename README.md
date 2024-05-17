# Mini projet microservices
This repository demonstrates an example implementation of a combined GraphQL and REST API using Express.js and a SQLite database. 
# Usage
customers-orders-tickets:



npm install express graphql sqlite3 body-parser express-graphql

api gateway:

npm install express

npm install express

# Customers Microservices
#REST Endpoints  
Port: http://localhost:5001

GET /customers: Retrieves all customers from the database.

GET /customer/:id: Retrieves a specific customer by their ID.

POST /customer: Creates a new customer.

PUT /customer/:id: Updates an existing customer by their ID.

DELETE /customer/:id: Deletes a customer by their ID.



#GraphQL Endpoint

Port: Port: http://localhost:5001/graphql
``` 
    mutation {
        addCustomer(name: "ghaith", email: "ghaith@example.com", password: "password123") {
            id
            name
            email
             }
          }

``` 


``` 

    mutation {
      updateCustomer(id: 1 , name: "ghaith", email: "ghaith@example.com", password: "password123") {
        id
        name
        email
             }

               } 
  
  ```

 ``` 
       mutation {
         deleteCustomer(id:1)
             }
 
  ``` 




# Orders Microservices 

#REST Endpoints

Port: http://localhost:5002

GET /orders: Retrieves all orders from the database.

GET /order/:id: Retrieves a specific order by its ID.

POST /order: Creates a new order.

PUT /order/:id: Updates an existing order by its ID.

DELETE /order/:id: Deletes an order by its ID.



#GraphQL Endpoint

Port: http://localhost:5002/graphql
 ``` 
 mutation {
             addOrder(customerID: 1, ticketId: 123) {
              id
              customerID
              ticketId
                  }
                  }
                  
 
  ``` 
  
   ``` 
mutation {
         updateOrder(id:1 , customerID:" 1", ticketId: "123") {
          id
         
    }
       }
                
     
  ``` 
  
   ``` 
   
     mutation {
     deleteOrder(id:1)
     }              

  ```   



        mutation {
        deleteTicket(id:1)
         }
  ```

