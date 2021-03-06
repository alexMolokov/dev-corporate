export function User (data)
{
    const TYPE_MAIN = "main";
    const TYPE_TECH = "tech";

    this.id  =  data['customerId'] || "";
    this.login = data['login'] || "";
    this.name = data['name'] || "";


    this.primary  = {
            id:'',
            email: "",
            firstName: "",
            lastName: "",
            jobTitle: ""
    };

    this.billing =  {
            address: data['address'] || "",
            phone: data['phone'] || "",
            email: data['email'] || "",
            city: data['city'] || "",
            state: data['state'] || "",
            zip: data['zip'] || "",
            country: data['country'] || ""
    };

    this.tech =  {
            id: "",
            firstName:"",
            lastName: "",
            jobTitle: "",
            email: ""
    }

    if(typeof data['contacts'] == "undefined") data['contacts'] = [];

    data['contacts'].forEach((contact) => {
        if(contact.type == TYPE_MAIN) {
            this.primary = contact;
        }
        if(contact.type == TYPE_TECH) {
            this.tech = contact;
        }

    })


}