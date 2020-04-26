import { Customer } from './customer';
import { Restaurant } from './restaurant';
import { Address } from './address';

export class Users {
    phone : string;
    name: string;
    password : string;
    customer: Customer;
    restaurant: Restaurant;
    address: Address;
    role: String;
    constructor(){
        this.address=new Address();
        // this.customer=new Customer();
        // this.restaurant=new Restaurant();
       
    }
    
    

}
