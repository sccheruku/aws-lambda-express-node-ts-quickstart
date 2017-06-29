export function parseJSON(source: any){
    if (typeof source == "object") return source;
    if (typeof source == "string") {
        let obj = null;
        try{
            obj = JSON.parse(source);
        }
        catch(error){
            // TODO: error logging
        }
        return obj;
    }
}