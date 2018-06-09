export function LocalServer(data)
{
    this.id = data.id;
    this.name = data.name;
    this.release = data.release;
    this.os = data.os;
    this.edition = data.edition;

    this.serverModules = data.serverModules;
    this.added = new Date(data.added);
    this.licenses = [];

    this.addLicense = function(license)
    {
        this.licenses.push(license);
    }

    this.getLicense = function(licenseID)
    {
        for(let i=0; i < this.licenses.length; i++)
        {
            if(this.licenses[i].id == licenseID) return this.licenses[i];
        }
    }

    this.getAdded = function()
    {
         return this.added.toISOString().substring(0,10);
    }


}