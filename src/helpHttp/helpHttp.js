export const helpHttp = () => {

    const customFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || "GET";
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers }
            : defaultHeader;
        
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;

        console.log(options)

        setTimeout(() => controller.abort(),3000);
    
    };

    const get = () => { };

    const post = () => { };

    const put = () => { };

    const del = () => { };


    return {
        get, post, put, del,
    }
}