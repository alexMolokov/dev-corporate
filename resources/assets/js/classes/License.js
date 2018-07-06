export function License(data)
{
    this.id = data.id;
    this.status = data.status;
    this.users = data.users;
    this.validTill;
    this.validFrom = new Date(data.validFrom);
    this.valid = data.valid;
    this.serverModules = data.serverModules
    this.signed = data.signed;
    this.test = data.test;

    if(data.validTill != "")
    {
        this.validTill = new Date(data.validTill);
    }

    this.added = new Date(data.added);


    this.getAdded = function()
    {
        return this.added.toISOString().substring(0,10);
    }

    this.getValidTill = function()
    {
        if(typeof this.validTill == "undefined") return "";

        return this.validTill.toISOString().substring(0,10);
    }

}