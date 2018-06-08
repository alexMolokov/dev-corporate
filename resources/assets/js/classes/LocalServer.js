export function LocalServer(data)
{
    this.id = data.id;
    this.name = data.name;
    this.release = data.release;
    this.os = data.os;

    this.serverModules = data.serverModules;
    this.added = new Date(data.added);
    this.licenses = [];

    this.addLicense = function(license)
    {
        this.licenses.push(license);
    }

    this.getAdded = function()
    {
         return this.added.toISOString().substring(0,10);
    }


}